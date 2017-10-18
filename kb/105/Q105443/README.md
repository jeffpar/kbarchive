---
layout: page
title: "Q105443: PRB: MetaFile Displays Incorrectly in Print Preview"
permalink: kb/105/Q105443/
---

## Q105443: PRB: MetaFile Displays Incorrectly in Print Preview

	Article: Q105443
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbprint kbMapMode kbMetafile kbMFC kbPrinting kbVC kbDSupport kbGrpDSMFCATL
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When displaying a metafile within the Microsoft Foundation Classes (MFC) Print
	and Print Preview architecture, the metafile prints correctly but is only
	partially or incorrectly displayed in the Print Preview window.
	
	CAUSE
	=====
	
	To simulate a printed page in a window, CPreviewDC modifies the mapping mode for
	the Print Preview window by changing the parameters for such calls as
	SetWindowExt() and SetMapMode() before passing them on to the attribute and
	output device contexts (DCs).
	
	However, CPreviewDC does not override CDC::PlayMetaFile(), which maps to the
	Windows application programming interface (API) ::PlayMetaFile(). If the
	metafile contains records for functions that affect the mapping mode, the
	CPreviewDC versions of these functions will not be called while the metafile is
	playing, causing the mapping mode in the Print Preview window to be set
	incorrectly (the attribute and output DCs lose synchronization).
	
	RESOLUTION
	==========
	
	Rather than PlayMetaFile(), use SaveDC(), ::EnumMetaFile(), and RestoreDC() to
	play the metafile. In the metafile enumeration callback procedure, trap the
	following functions and call the equivalent CDC functions:
	
	  SetMapMode
	  SetWindowExt, ScaleWindowExt
	  SetViewportExt, ScaleViewportExt
	  SetViewportOrg, OffsetViewportOrg
	
	(Of these, SetWindowExt occurs in metafiles more often than the rest. It is
	generally not recommended that metafiles contain records for SetMapMode or any
	of the Viewport functions, but it is common to find SetMapMode records in
	metafiles anyway.)
	
	Bracket the call to ::EnumMetaFile() between calls to SaveDC() and RestoreDC() to
	ensure that the output and attribute DCs are correctly synchronized after
	playing the metafile.
	
	MORE INFORMATION
	================
	
	The enumeration callback procedure should handle the above functions by calling
	the (virtual) CDC version of the function while passing everything else to
	PlayMetaFileRecord(). This allows CPreviewDC to keep the output DC and the
	attribute DC correctly synchronized with respect to mapping mode. For example:
	
	Sample Code
	-----------
	
	     int CALLBACK __export EnumMFProc(HDC hdc,
	                                      HANDLETABLE FAR *lpht,
	                                      METARECORD  FAR *lpmr,
	                                      int cObj,
	                                      LPARAM lParam)
	     {
	       // lParam is available for passing application-specific data to the
	       // enum proc (via the last parameter to EnumMetaFile). Let's make
	       // things easier by passing in a pointer to the CDC object.
	     
	       CDC *pDC = (CDC *)lParam;
	     
	       switch(lpmr->rdFunction)
	         {
	         // SetWindowExt and SetMapMode are the most important ones to
	         // look for.
	     
	         case META_SETWINDOWEXT:
	             pDC->SetWindowExt(lpmr->rdParm[1], lpmr->rdParm[0]);
	             break;
	     
	         case META_SETMAPMODE:
	             pDC->SetMapMode(lpmr->rdParm[0]);
	             break;
	     
	         case META_SETVIEWPORTEXT:
	             pDC->SetViewportExt(lpmr->rdParm[1], lpmr->rdParm[0]);
	             break;
	     
	         case META_SETVIEWPORTORG:
	             pDC->SetViewportOrg(lpmr->rdParm[1], lpmr->rdParm[0]);
	             break;
	     
	         // Add cases for the others if desired...
	     
	         default:
	             PlayMetaFileRecord(hdc, lpht, lpmr, cObj);
	         }
	       return 1;
	     }
	
	In addition to the functions listed above, there are other functions that will
	not affect the appearance of the metafile in the Print Preview window, but may
	affect the synchronization of the output and attribute DCs used by CPreviewDC.
	This can affect subsequent drawing. Consider that the metafile may select
	different fonts and other objects into the output DC, may change the
	foreground/background colors, the text alignment flags, and so forth.
	
	Also, it is common for applications to set a different mapping mode before
	playing a metafile (depending on the metafile) and this mapping mode may
	conflict with the mapping mode used by the rest of the view class.
	
	For these reasons, if any drawing will take place after playing the metafile
	(including playing another metafile, or even the same metafile again), the DC
	must be restored to the state it was in prior to playing the metafile. This can
	be accomplished by using SaveDC/RestoreDC, as in the following example:
	
	     pDC->SaveDC();                     // Save current state of DC
	     pDC->SetMapMode(MM_ANISOTROPIC);   // Scalable metafile
	     pDC->SetViewportExt(xExt, yExt);   // Size of picture
	     pDC->SetViewportOrg(x, y);         // Location of picture
	
	     ::EnumMetaFile(pDC->GetSafeHdc(), hmf, EnumMFProc, (LPARAM)(LPSTR)pDC);
	
	     pDC->RestoreDC(-1);                // Restore to previous saved state
	                                        // Continue with other drawing...
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbMapMode kbMetafile kbMFC kbPrinting kbVC kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
