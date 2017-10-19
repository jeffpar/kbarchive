---
layout: page
title: "Q141440: PRB: Paste Link Fails in Microsoft Excel"
permalink: /kb/141/Q141440/
---

## Q141440: PRB: Paste Link Fails in Microsoft Excel

	Article: Q141440
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbClipboard kbCOMt kbExcel kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbGrpD
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you attempt to use Paste Link to paste the clipboard contents into
	Microsoft Excel, Microsoft Excel fails and displays a warning:
	
	  Unable to paste link.
	
	CAUSE
	=====
	
	When Microsoft Excel attempts to paste link an object, it looks for a full
	moniker for the object (OLEWHICHMK_OBJFULL). The full moniker consists of the
	moniker of the object's container (OLEWHICHMK_CONTAINER) and the moniker of the
	object relative to its container (OLEWHICHMK_OBJREL). In MFC, if SetItemName()
	is not used to provide a name for the COleServerItem, the OLEWHICHMK_OBJREL
	portion of the moniker cannot be provided. This causes Paste Link to fail in
	Microsoft Excel.
	
	RESOLUTION
	==========
	
	Set the name of the item to be paste linked by using the SetItemName() function.
	The sample code in this article illustrates one way you might do this.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This behavior seems to be unique to Microsoft Excel but may exist in other
	applications as well.
	
	Run the scribble application (step 7) and save a document. In scribble, on the
	Edit menu, click Copy to copy the document object and metafile representation to
	the clipboard. Run Microsoft Excel, choose Paste Special, and select the Paste
	Link option. Attempt to use Paste Link to paste the Scrib Document Object or the
	"Picture." Microsoft Excel will not succeed and will display a warning:
	
	  Unable to paste link.
	
	Sample Code
	-----------
	
	In the case of scribble, the following code will fix the problem
	
	  CScribItem::CScribItem(CScribDoc* pContainerDoc)
	     : COleServerItem(pContainerDoc, TRUE)
	  {
	      SetItemName("Scribble Item");
	  }
	
	REFERENCES
	==========
	
	For more information, see COleServerItem::XOleObject::GetMoniker() in
	Olesvr2.cpp and IOleObject::GetMoniker() in the OLE 2 Programmer's Reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbClipboard kbCOMt kbExcel kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Hardware          : ALPHA MIPS x86
	Issue type        : kbprb
	
	=============================================================================
	
