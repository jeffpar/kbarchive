---
layout: page
title: "Q150431: PRB: Using Enhanced Metafiles in COleServerItem"
permalink: kb/150/Q150431/
---

## Q150431: PRB: Using Enhanced Metafiles in COleServerItem

	Article: Q150431
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbInplaceAct kbMetafile kbMFC kbVC400 kbVC410 kbVC420 kbGrpDSMFC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Enhanced metafiles do not appear in a non-active state in a OLE client when they
	are used by the server to render the image. A call to CDC::PlayMetaFile() in the
	OnDraw of the COleServerItem-derived class fails if it is passed an enhanced
	metafile.
	
	CAUSE
	=====
	
	When an OLE client application asks the server for a metafile representation of
	the server data when it is in an inactive state or using Paste Special, the
	application asks for it in a standard metafile format (CF_METAFILEPICT). The
	server cannot respond to this request. However, most images can be rendered
	without a problem using standard metafiles.
	
	When COleClientItem::Draw calls the IViewObject2::Draw to render the cached
	metafile representation, it needs to receive a metafile and not an enhanced
	metafile. When COleServerItem::OnDraw is called, the DC passed is for a standard
	metafile, not an enhanced metafile, so the rendering into the DCneeds to be
	limited to items understood by a standard metafile.
	
	RESOLUTION
	==========
	
	If your server is using enhanced metafiles, and the client is asking it to
	render to an standard metafile, you need to make a conversion. You can use
	GetEnhMetafileBits() to get each command of the enhanced metafile and copy the
	commands to a standard metafile using SetMetafileBitsEx(), or you can use the
	GetWinMetaFileBits() function to make the conversion.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the metafile format rather than the enhanced metafile. Check the
	documentation on the features of enhanced metafiles to determine whether this
	usage is appropriate for your application.
	
	REFERENCES
	==========
	
	For more information on enhanced metafiles, see the "Enhanced-Format Metafiles"
	section in Online Help.
	
	Additional query words: 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbInplaceAct kbMetafile kbMFC kbVC400 kbVC410 kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbprb
	
	=============================================================================
	
