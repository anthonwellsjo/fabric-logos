declare module CanvasRef {

  export interface Metadata {
      version: number;
      type: string;
      generator: string;
  }

  export interface Geometry {
      uuid: string;
      type: string;
      width: number;
      height: number;
      depth: number;
      widthSegments: number;
      heightSegments: number;
      depthSegments: number;
  }

  export interface Material {
      uuid: string;
      type: string;
      color: number;
      roughness: number;
      metalness: number;
      sheen: number;
      sheenColor: number;
      sheenRoughness: number;
      emissive: number;
      specularIntensity: number;
      specularColor: number;
      clearcoat: number;
      clearcoatRoughness: number;
      envMapIntensity: number;
      reflectivity: number;
      refractionRatio: number;
      transmission: number;
      thickness: number;
      attenuationDistance: number;
      attenuationColor: number;
      depthFunc: number;
      depthTest: boolean;
      depthWrite: boolean;
      colorWrite: boolean;
      stencilWrite: boolean;
      stencilWriteMask: number;
      stencilFunc: number;
      stencilRef: number;
      stencilFuncMask: number;
      stencilFail: number;
      stencilZFail: number;
      stencilZPass: number;
  }

  export interface Object {
      uuid: string;
      type: string;
      layers: number;
      matrix: number[];
      geometry: string;
      material: string;
  }

  export interface Mesh {
      metadata: Metadata;
      geometries: Geometry[];
      materials: Material[];
      object: Object;
  }

}

