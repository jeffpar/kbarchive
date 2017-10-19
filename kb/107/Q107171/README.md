---
layout: page
title: "Q107171: INFO: Nesting Scalable Metafiles"
permalink: /kb/107/Q107171/
---

## Q107171: INFO: Nesting Scalable Metafiles

	Article: Q107171
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ability to use a metafile Device Context (DC) as the destination DC of a
	metafile playback is new in Windows 3.1. A metafile can now be played into
	another metafile, and therefore you can easily place one metafile inside another
	metafile or copy pieces of one metafile into another.
	
	It is sometimes common for an application to create a metafile that will be
	passed to another application. In this case, it is likely that the metafile will
	be scaled. Scalable metafiles can easily be created by using the MM_ANISOTROPIC
	mapping mode, the SetWindowExt() function, and the SetViewportExt() function.
	The logical extent of a scalable metafile is defined by the parameters in the
	SetWindowExt() function. It can be complicated when playing one scalable
	metafile into another scalable metafile device context. The logical extents of
	the two metafiles may be different and the desired location of the metafile
	being played may be offset from the origin of the destination metafile DC. The
	OffsetWindowOrg() and ScaleViewportExt() functions can be used to alter the
	metafile DC's attributes in order to play the source metafile correctly into the
	destination metafile DC. The SaveDC/RestoreDC commands can be used to preserve
	the metafile DC's attributes while playing the source metafile into it.
	
	MORE INFORMATION
	================
	
	When creating a scalable metafile, you are responsible for setting the logical
	extent of the metafile by calling SetWindowExt(). When playing back a scalable
	metafile, the application can set the mapping mode to MM_ANISOTROPIC and call
	SetViewportExt() to specify the desired size of the metafile. When playing a
	scalable metafile into another scalable metafile, the ratio of the logical
	extents must be used to determine how far to offset the window origin, so the
	metafile will be played in the correct location. Also, the viewport must be
	scaled accordingly so the metafile being played in the destination metafile DC
	will be the correct size. Calling SaveDC() before playing the metafile and
	RestoreDC() after playing the metafile will preserve the attributes of the
	destination metafile DC.
	
	The following code can be used to play a scalable metafile into another scalable
	metafile DC. Both the logical extents of the source and destination are needed.
	The first parameter is the destination metafile DC. The second parameter
	specifies the metafile that will be played into the destination metafile DC. The
	next four parameters specify a logical rectangle where the metafile will be
	played on the destination metafile DC. The two parameters after that specify the
	logical extents of the destination metafile DC, and the last two parameters are
	the logical extents of the metafile being played.
	
	Sample Code
	-----------
	
	     void PlayInMetafile(HDC hdcMeta,HMETAFILE hmf,int nLeftRect,
	                      int nTopRect,int nRightRect,int nBottomRect,
	                      int xLogExt, int yLogExt, int xHmfLogExt,
	                      int yHmfLogExt)
	
	     {
	
	      SaveDC(hdcMeta);
	      OffsetWindowOrg(hdcMeta,-MulDiv(nLeftRect, xHmfLogExt,
	                      nRightRect-nLeftRect), -MulDiv(nTopRect,
	                      yHmfLogExt, nBottomRect-nTopRect));
	
	      ScaleViewportExt(hdcMeta,nRightRect-nLeftRect,xLogExt,
	                               nBottomRect-nTopRect,yLogExt);
	      PlayMetaFile(hdcMeta,hmf);
	      RestoreDC(hdcMeta,-1);
	
	     }
	
	Additional query words: 3.10 view port
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
