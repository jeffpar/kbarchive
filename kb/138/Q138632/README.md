---
layout: page
title: "Q138632: PRB: Can't Serialize Items After CRichEditDoc::Serialize"
permalink: /kb/138/Q138632/
---

## Q138632: PRB: Can't Serialize Items After CRichEditDoc::Serialize

	Article: Q138632
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMFC kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGr
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	An attempt to load a CRichEditDoc causes the following message to appear:
	
	  Unexpected file format.
	
	This happens when you attempt to serialize data to the archive after serializing
	the CRichEditDoc.
	
	CAUSE
	=====
	
	CRichEditDoc::Serialize() relies on the rich edit control's support for saving
	data. The assumption made by MFC is that the serialization of a rich edit
	control will encapsulate an entire file. The serialization code for loading from
	the CArchive starts from the current file position and reads to the end of the
	file.
	
	An attempt to load anything after loading the CRichEditDoc fails because the file
	pointer is at the end of the file.
	
	RESOLUTION
	==========
	
	If you need to store additional data in the archive, serialize it before
	serializing the CRichEditDoc. Ensure that the CRichEditDoc is serialized last.
	For example:
	
	  void CMyRichEditDoc::Serialize(CArchive& ar)
	  {
	    if (ar.IsStoring())
	    {
	     ar << m_str1;
	    }
	    else
	    {
	      ar >> m_str1;
	    }
	
	    // Calling the base class CRichEditDoc enables serialization
	    // of the container document's COleClientItem objects.
	    CRichEditDoc::Serialize(ar);
	
	    // Do not use CArchive after calling CRichEditDoc::Serialize.
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbcode kbDocView kbMFC kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
