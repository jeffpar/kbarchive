---
layout: page
title: "Q247072: SAMPLE: DnDZoom.exe - ATL Control Implements OLE Drag and Drop"
permalink: /kb/247/Q247072/
---

## Q247072: SAMPLE: DnDZoom.exe - ATL Control Implements OLE Drag and Drop

{% raw %}

	Article: Q247072
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbActiveX kbATL kbCtrl kbDragDrop KbUIDesign kbVC kbDSupport kbGrpDSMFCATL kbCol
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DnDZoom.exe is a sample that demonstrates how to implement a drag-and-drop and
	zoom operation in the ATL framework. Implementing only a drag-and-drop operation
	or only zooming capabilities in an ATL control is a straightforward process.
	However, when you have to implement both, a design decision needs to be made.
	Here are some of the available design options:
	
	- Provide a dedicated area in the control for initiating drag-and-drop
	  operations.
	
	- Use CTRL+DRAG to initiate a drag-and-drop operation (while a regular drag
	  would still perform the zoom operation).
	
	- Implement a smart drag-and-drop operation that determines, based on the drop
	  target, whether a zoom or a drag-and-drop operation is desired.
	
	The first two solutions have obvious shortcomings. DnDZoom.exe implements the
	third solution: when the mouse is released outside of the control a
	drag-and-drop operation is performed. However, when the mouse is released inside
	the control, a zoom operation is completed.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Dndzoom.exe now
	  (http://download.microsoft.com/download/vc60ent/28/1.0/WIN98/EN-US/DnDZoom.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Dndzoomvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.15/win98mexp/en-us/Dndzoomvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The sample illustrates how a control, by implementing both a drop source and a
	drop target can determine whether a zoom operation is desired, or a
	drag-and-drop operation on a different drop target should be performed. In
	addition, the control is still able to distinguish between simple mouse clicks
	in the control, a drag-and-drop/zoom operation being initiated, and a
	drag-and-drop versus a zoom operation being performed.
	
	Also, the DragDropZoom() function implemented by the control can take a bit flag
	to signify whether a zoom operation is possible or not based on some external
	conditions. When you use this member function and the bit flag, a handler for
	the WM_LBUTTONDOWN message could be written as the following:
	
	     LRESULT CDnDCtrl::OnLButtonDown(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	     {
	  	DWORD dwEffect;
	
	  	IDataObject *pDataObject;
	  	IDropSource *pDropSource;
	  	QueryInterface(__uuidof(IDataObject), reinterpret_cast<void**>(&pDataObject));
	  	QueryInterface(__uuidof(IDropSource), reinterpret_cast<void**>(&pDropSource));
	  		
	  	DoDragDropZoom(
	  		pDataObject,
	  		pDropSource, 
	  		DROPEFFECT_COPY | DROPEFFECT_MOVE | (m_bEnableZoom ? DROPEFFECT_ZOOM : 0), 
	  		&dwEffect
	  	);
	
	  	if (dwEffect == DROPEFFECT_MOVE)
	  		put_Content(NULL);
	
	  	// Clean up:
	  	pDataObject->Release();
	  	pDropSource->Release();
	
	  	return 0;
	
	     }
	
	The member function DoDragDropZoom() then calls virtual member functions
	OnMouseClick(), OnZoom() or OnDrop() depending on the outcome of the drag drop
	operation.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Cosmin
	Radu, Microsoft Corporation.
	
	
	Additional query words: DnDZoom Dndzoomvcnet
	
	======================================================================
	Keywords          : kbfile kbActiveX kbATL kbCtrl kbDragDrop KbUIDesign kbVC kbDSupport kbGrpDSMFCATL kbCollectionClass kbDataObject 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
