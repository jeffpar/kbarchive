---
layout: page
title: "Q29240: HOWTO: Converting Colors Between RGB and HLS (HBS)"
permalink: /kb/029/Q29240/
---

## Q29240: HOWTO: Converting Colors Between RGB and HLS (HBS)

	Article: Q29240
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code fragment below converts colors between RGB (Red, Green, Blue) and
	HLS/HBS (Hue, Lightness, Saturation/Hue, Brightness, Saturation).
	
	MORE INFORMATION
	================
	
	
	RGBtoHLS() takes a DWORD RGB value, translates it to HLS, and stores the results
	in the global vars H, L, and S. HLStoRGB takes the current values of H, L, and S
	and returns the equivalent value in an RGB DWORD. The vars H, L, and S are only
	written to by:
	
	1. RGBtoHLS (initialization)
	
	2. The scroll bar handlers
	
	A point of reference for the algorithms is Foley and Van Dam, "Fundamentals of
	Interactive Computer Graphics," Pages 618-19. Their algorithm is in floating
	point. CHART implements a less general (hardwired ranges) integral algorithm.
	
	There are potential round-off errors throughout this sample. ((0.5 + x)/y)
	without floating point is phrased ((x + (y/2))/y), yielding a very small
	round-off error. This makes many of the following divisions look strange.
	
	     */ 
	     #define  HLSMAX   RANGE /* H,L, and S vary over 0-HLSMAX */ 
	     #define  RGBMAX   255   /* R,G, and B vary over 0-RGBMAX */ 
	                             /* HLSMAX BEST IF DIVISIBLE BY 6 */ 
	                             /* RGBMAX, HLSMAX must each fit in a byte. */ 
	
	     /* Hue is undefined if Saturation is 0 (grey-scale) */ 
	     /* This value determines where the Hue scrollbar is */ 
	     /* initially set for achromatic colors */ 
	     #define UNDEFINED (HLSMAX*2/3)
	
	     void  RGBtoHLS(lRGBColor)
	
	     DWORD lRGBColor;
	     {
	        WORD R,G,B;          /* input RGB values */ 
	        BYTE cMax,cMin;      /* max and min RGB values */ 
	     WORD  Rdelta,Gdelta,Bdelta; /* intermediate value: % of spread from max
	
	     */ 
	        /* get R, G, and B out of DWORD */ 
	        R = GetRValue(lRGBColor);
	        G = GetGValue(lRGBColor);
	        B = GetBValue(lRGBColor);
	
	        /* calculate lightness */ 
	        cMax = max( max(R,G), B);
	        cMin = min( min(R,G), B);
	        L = ( ((cMax+cMin)*HLSMAX) + RGBMAX )/(2*RGBMAX);
	
	        if (cMax == cMin) {           /* r=g=b --> achromatic case */ 
	           S = 0;                     /* saturation */ 
	           H = UNDEFINED;             /* hue */ 
	        }
	        else {                        /* chromatic case */ 
	           /* saturation */ 
	           if (L <= (HLSMAX/2))
	              S = ( ((cMax-cMin)*HLSMAX) + ((cMax+cMin)/2) ) / (cMax+cMin);
	           else
	              S = ( ((cMax-cMin)*HLSMAX) + ((2*RGBMAX-cMax-cMin)/2) )
	                 / (2*RGBMAX-cMax-cMin);
	
	           /* hue */ 
	        Rdelta = ( ((cMax-R)*(HLSMAX/6)) + ((cMax-cMin)/2) ) / (cMax-cMin);
	        Gdelta = ( ((cMax-G)*(HLSMAX/6)) + ((cMax-cMin)/2) ) / (cMax-cMin);
	        Bdelta = ( ((cMax-B)*(HLSMAX/6)) + ((cMax-cMin)/2) ) / (cMax-cMin);
	
	           if (R == cMax)
	              H = Bdelta - Gdelta;
	           else if (G == cMax)
	              H = (HLSMAX/3) + Rdelta - Bdelta;
	           else /* B == cMax */ 
	              H = ((2*HLSMAX)/3) + Gdelta - Rdelta;
	
	           if (H < 0)
	              H += HLSMAX;
	           if (H > HLSMAX)
	              H -= HLSMAX;
	        }
	     }
	     /* utility routine for HLStoRGB */ 
	     WORD HueToRGB(n1,n2,hue)
	     WORD n1;
	     WORD n2;
	     WORD hue;
	     {
	        /* range check: note values passed add/subtract thirds of range */ 
	        if (hue < 0)
	           hue += HLSMAX;
	   
	        if (hue > HLSMAX)
	           hue -= HLSMAX;
	
	        /* return r,g, or b value from this tridrant */ 
	        if (hue < (HLSMAX/6))
	            return ( n1 + (((n2-n1)*hue+(HLSMAX/12))/(HLSMAX/6)) );
	        if (hue < (HLSMAX/2))
	           return ( n2 );
	        if (hue < ((HLSMAX*2)/3))
	           return ( n1 +    (((n2-n1)*(((HLSMAX*2)/3)-hue)+(HLSMAX/12))/(HLSMAX/6))
	     );
	        else
	           return ( n1 );
	     }
	
	     DWORD HLStoRGB(hue,lum,sat)
	     WORD hue;
	     WORD lum;
	     WORD sat;
	      {
	         WORD R,G,B;                /* RGB component values */ 
	        WORD  Magic1,Magic2;       /* calculated magic numbers (really!) */ 
	
	        if (sat == 0) {            /* achromatic case */ 
	           R=G=B=(lum*RGBMAX)/HLSMAX;
	           if (hue != UNDEFINED) {
	              /* ERROR */ 
	            }
	         }
	        else  {                    /* chromatic case */ 
	           /* set up magic numbers */ 
	           if (lum <= (HLSMAX/2))
	              Magic2 = (lum*(HLSMAX + sat) + (HLSMAX/2))/HLSMAX;
	           else
	              Magic2 = lum + sat - ((lum*sat) + (HLSMAX/2))/HLSMAX;
	           Magic1 = 2*lum-Magic2;
	
	           /* get RGB, change units from HLSMAX to RGBMAX */ 
	           R = (HueToRGB(Magic1,Magic2,hue+(HLSMAX/3))*RGBMAX +
	     (HLSMAX/2))/HLSMAX;
	           G = (HueToRGB(Magic1,Magic2,hue)*RGBMAX + (HLSMAX/2)) / HLSMAX;
	           B = (HueToRGB(Magic1,Magic2,hue-(HLSMAX/3))*RGBMAX +
	     (HLSMAX/2))/HLSMAX;
	        }
	        return(RGB(R,G,B));
	      }
	
	Additional query words: 3.00 3.10 3.50 4.00 color RGB HLS HBS win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
