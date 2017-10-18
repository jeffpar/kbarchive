---
layout: page
title: "Q98268: PRB: Metafiles and Palettes"
permalink: kb/098/Q98268/
---

## Q98268: PRB: Metafiles and Palettes

	Article: Q98268
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The metafile list inside of GDI's heap grows by a WORD.
	
	CAUSE
	=====
	
	This happens each time an application selects a palette into a metafile device
	context (DC).
	
	RESOLUTION
	==========
	
	If a palette is never deleted, then this block is never freed and keeps on
	growing until GDI's heap fills and the system crashes.
	
	This problem is heightened by the fact that the application typically selects the
	default stock palette back in so the application can free its custom palette.
	Because an application cannot delete the default stock palette, this memory is
	never freed inside of GDI's heap.
	
	MORE INFORMATION
	================
	
	Below is the code necessary to correct the problem. There are no rules regarding
	when to call FlushGDIHeap(); however, Microsoft recommends doing this after a
	major operation, such as after saving a file or printing. Determining whether
	you need to flush the GDI heap depends on how often your application selects in
	a palette in a metafile. Optionally, you could periodically call TOOLHELP and
	see if the GDI resources are greater than X%.
	
	Sample Code
	-----------
	
	  SEG       segGDI, segNil;
	  HANDLE    hPalSys;
	  int       iPal;
	  BOOL      fEnableFlushHeap;
	
	  /* ---------------------------------------------
	     The following code is used to initialize the
	     FlushGDIHeap function.
	     --------------------------------------------- */ 
	  API VOID InitOLE(VOID)
	  {
	    HANDLE hGDISegment;
	
	    /* Called once during application initialization.  Sets up the
	       state for FlushGDIHeap.  */ 
	    /* Make sure this version of Windows has the bug. */ 
	    if (wWinVer >= 0x400)
	            return;
	
	    /* This is from MSDN and it gets GDI's DS.
	     * The module handle return by LoadLibrary is actually the module's DS.
	     */ 
	    hGDISegment = LoadLibrary("GDI.EXE");
	    if (hGDISegment <= HINSTANCE_ERROR)
	            return;
	
	    FreeLibrary(hGDISegment);
	
	    Glob(segGDI) = HIWORD(GlobalLock(hGDISegment));
	    if (Glob(segGDI) != segNil)
	    {
	      GlobalUnlock(hGDISegment);
	      Glob(hPalSys) = GetStockObject(DEFAULT_PALETTE);
	      // Debug version of Windows has palette metafile list
	      // heap handle in different offset than in retail Windows
	      // versions greater than 3.0.
	      // The offset is in WORD's.
	      Glob(iPal) = (GetSystemMetrics(SM_DEBUG) != 0 &&
	              FGTWinVer30()) ? 11 : 9;
	      Glob(fEnableFlushHeap) = TRUE;
	    }
	
	  } // end InitOLE
	
	  /*=========================================================================
	  =
	  FlushGDIHeap
	  ===========================================================================
	  =*/ 
	  STATIC VOID NEAR FlushGDIHeap(VOID)
	  {
	    HANDLE hPal;
	    SEG segTmp;
	    WORD *pPal, *pw, w2, iPal;
	
	    /* If the flush heap operation is not enabled then return. */ 
	    if (!Glob(fEnableFlushHeap))
	            return;
	
	    /* Switch to GDI's heap for Local memory functions. */ 
	    segTmp = Glob(segGDI);
	    hPal = Glob(hPalSys);
	    /* Offset in Pal data structure to second metafile list handle.
	    * This varies between debug and retail (see InitOLE).
	    */ 
	    iPal = Glob(iPal);
	    _asm {
	            push ds
	            mov  ds,segTmp
	         }
	
	    /* Shrink the metafile list table down for the system palette. */ 
	    if ((pPal = (WORD *)LocalLock(hPal)) != NULL)
	    {
	       /* First free memory from the standard object metafile list.
	        * All GDI objects have this list associated with them if
	        * they are selected into metafiles.
	        */ 
	
	       if (pPal[4] != hNil)
	       {
	          if ((pw = (WORD *)LocalLock(pPal[4])) != NULL)
	          {
	             w2 = *pw;
	             LocalUnlock(pPal[4]);
	             LocalReAlloc(pPal[4], (w2+1) * sizeof(WORD), LHND);
	          }
	       }
	
	       /* Second, free memory from the secondary metafile list.
	        * Only palettes have this list.
	        */ 
	
	       if (pPal[iPal] != hNil)
	       {
	         if ((pw = (WORD *)LocalLock(pPal[iPal])) != NULL)
	         {
	            w2 = *pw;
	            LocalUnlock(pPal[iPal]);
	            LocalReAlloc(pPal[iPal], (w2+1) * sizeof(WORD), LHND);
	         }
	       }
	
	       LocalUnlock(hPal);
	    }
	
	    /* Restore application's data segment. */ 
	    _asm {
	           pop ds
	         }
	  } // end FlushGDIHeap
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
