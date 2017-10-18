---
layout: page
title: "Q162443: Msbatch.inf Parameters: Setting Color Depth and Resolution"
permalink: kb/162/Q162443/
---

## Q162443: Msbatch.inf Parameters: Setting Color Depth and Resolution

	Article: Q162443
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set the color depth and display resolution using
	the Msbatch.inf file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, add the following section:
	
	  [System]
	
	Add only one of the following lines to the [System] section:
	
	  DisplChar=1,640,480    ; Monochrome 640 x 480
	  DisplChar=1,800,600    ; Monochrome 800 x 600
	  DisplChar=1,1024,768   ; Monochrome 1024 x 768
	  DisplChar=1,1280,1024  ; Monochrome 1280 x 1024
	  DisplChar=4,640,480    ; 16 colors 640 x 480
	  DisplChar=4,800,600    ; 16 colors 800 x 600
	  DisplChar=4,1024,768   ; 16 colors 1024 x 768
	  DisplChar=4,1280,1024  ; 16 colors 1280 x 1024
	  DisplChar=8,640,480    ; 256 colors 640 x 480
	  DisplChar=8,800,600    ; 256 colors 800 x 600
	  DisplChar=8,1024,768   ; 256 colors 1024 x 768
	  DisplChar=8,1280,1024  ; 256 colors 1280 x 1024
	  DisplChar=15,640,480   ; 32,000 colors 640 x 480
	  DisplChar=15,800,600   ; 32,000 colors 800 x 600
	  DisplChar=15,1024,768  ; 32,000 colors 1024 x 768
	  DisplChar=15,1280,1024 ; 32,000 colors 1280 x 1024
	  DisplChar=16,640,480   ; 64,000 colors 640 x 480
	  DisplChar=16,800,600   ; 64,000 colors 800 x 600
	  DisplChar=16,1024,768  ; 64,000 colors 1024 x 768
	  DisplChar=16,1280,1024 ; 64,000 colors 1280 x 1024
	  DisplChar=24,640,480   ; 16.7 million colors (24-bit) 640 x 480
	  DisplChar=24,800,600   ; 16.7 million colors (24-bit) 800 x 600
	  DisplChar=24,1024,768  ; 16.7 million colors (24-bit) 1024 x 768
	  DisplChar=24,1280,1024 ; 16.7 million colors (24-bit) 1280 x 1024
	  DisplChar=32,640,480   ; 16.7 million colors (32-bit) 640 x 480
	  DisplChar=32,800,600   ; 16.7 million colors (32-bit) 800 x 600
	  DisplChar=32,1024,768  ; 16.7 million colors (32-bit) 1024 x 768
	  DisplChar=32,1280 x 1024 ; 16.7 million colors (32-bit) 1280 x 1024
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
