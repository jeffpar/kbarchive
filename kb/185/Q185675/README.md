---
layout: page
title: "Q185675: FIX: DelayRenderFileData() Does Not Call OnRenderFileData()"
permalink: /kb/185/Q185675/
---

## Q185675: FIX: DelayRenderFileData() Does Not Call OnRenderFileData()

{% raw %}

	Article: Q185675
	Product(s): Microsoft C Compiler
	Version(s): 1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In OLE drag-and-drop, when using COleDataSource::DelayRenderFileData() with the
	default second parameter of NULL, COleDataSource::OnRenderFileData() may not be
	called to request the actual data.
	
	CAUSE
	=====
	
	When you call COleDataSource::DelayRenderFileData() with a clipboard format such
	as CF_TEXT (or any other clipboard format) and the second parameter FORMATETC is
	not specified (defaulting to NULL), _AfxFillFormatEtc() gets called. This
	function creates a FORMATETC structure and populates it with default values--it
	fills the "tymed" member of the FORMATETC structure with -1. Because the "tymed"
	member is a DWORD, the value is effectively 0xffffffff, and therefore all TYMED
	enumerations are supported.
	
	However, COleDataSource::OnRenderFileData() or your override for this function,
	is called only if the user of this data requests the data with a TYMED value of
	TYMED_ISTREAM or TYMED_HGLOBAL.
	
	Because DelayRenderFileData() specified that all the TYMED enumerations are
	acceptable, a client may in fact ask for data with a TYMED value other than
	TYMED_ISTREAM or TYMED_HGLOBAL. This results in an HRESULT of DATA_E_FORMATETC
	being returned from IDataObject::GetData().
	
	RESOLUTION
	==========
	
	The workaround is to call COleDataSource::DelayRenderFileData() with the second
	parameter explicitly specified. For example:
	
	     FORMATETC fmt = {CF_TEXT, NULL, DVASPECT_CONTENT, -1,
	        TYMED_ISTREAM|TYMED_HGLOBAL};
	
	     // Class derived from ColeDataSource.
	     COleMyDataSource *pDataSrc;
	     pDataSrc = new COleMyDataSource();
	     pDataSrc->DelayRenderFileData(CF_TEXT, &fmt);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation
	
	Additional query words: 0x80040064 [ASCII 150]2147745892
	
	======================================================================
	Keywords          : kbole kbActiveX kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
