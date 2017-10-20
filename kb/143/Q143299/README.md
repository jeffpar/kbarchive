---
layout: page
title: "Q143299: CFormView-Based Server Shows Metafile When Not Active"
permalink: /kb/143/Q143299/
---

## Q143299: CFormView-Based Server Shows Metafile When Not Active

{% raw %}

	Article: Q143299
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbprint kbSample kbPrinting kbVC400 kbVC410 kbVC420 kbVC500 kbVC60
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the Microsoft .NET Framework and the unmanaged native Microsoft Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The FVServer application demonstrates using a CFormView based application as an
	OLE server object. One of the problems using CFormView is that the dialog-based
	view will not render itself into the metafile used to display the application
	when it has been in-place activated and then deactivated.
	
	This sample demonstrates one method of overcoming this limitation.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Fvview.exe now
	  (http://download.microsoft.com/download/vc60pro/Sample8/1/NT4/EN-US/Fvview.exe)
	
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
	
	  DownloadDownload Fvviewvcnet.exe now
	  (http://download.microsoft.com/download//VisualStudioNET/sample/1.1/WIN98MeXP/EN-US/Fvviewvcnet.exe)
	
	Release Date: June 24, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	MORE INFORMATION
	================
	
	When you base your server on the CFormView class, you create a dialog template
	with the resource editor to act as the view of the application. If you activate
	the application in-place, the drawing occurs in the CFormView::OnDraw(). Usually
	the CFormView derived class does not implement any drawing.
	
	When the user selects outside the in-place activation area the application goes
	to the loaded state and any representation on the screen is handled by rendering
	a presaved metafile. This metafile is created in the COleServerItem::OnDraw() by
	passing in a device context (DC) for a metafile and expecting the drawing to
	occur. In most cases the CView derived class's OnDraw() or a separate function
	is called to actually render into the metafile. See the Scribble tutorial for an
	example of how to accomplish this.
	
	In the case of a CFormView-derived class, this technique will not work directly.
	One method of overcoming this limitation is to draw each of the controls
	yourself. Some controls may not draw and you may have to use GDI calls such as
	Rectangle() and LineTo() to actually draw the control.
	
	Another method, which is demonstrated in this sample, is to BitBlt a picture of
	the screen into a memory device context and save it. Then, when the
	COleServerItem::OnDraw() is called, BitBlt the saved picture into the metafile
	DC provided. The side benefit to this method is that you get a Print Preview of
	the object for free from MFC, because it uses the same metafile.
	
	In the sample, the function CFVView::SetPicture() dynamically creates a memory DC
	and a bitmap object. The bitmap object must be set to the size of the current
	view before it is selected into the DC. This is accomplished by setting a member
	variable in the document class to the size of the view after the view is
	created. In the sample, the size is computed from the size shown by the resource
	editor and uses hard-coded values. This seems reasonable as long as you are not
	dynamically changing the size of the dialog. See the documentation on
	CFVDoc::OnNewDocument() for the method used to get the size in pixels of a
	dialog (also see KB article Q125681).
	
	The only problem remaining is determining when the SetPicture() function should
	be called. There are two locations. The first is in the COleServerDoc derived
	class's CFVDoc::OnDeactivate(). This function is called twice after the user
	selects outside the server's in-place activation area. The first call is when
	the server is going from the UIActive state to the Active state, and the second
	call is going from the Active state to the Loaded state. We must distinguish
	between these two calls because the first time it is called, the CFormView is
	visible and the second time it's called, it is not visible. The server's
	DoVerb() is called to hide the server between calls to OnDeactivate(). If we
	simply called SetPicture() during OnDeactivate(), we would BitBlt a blank
	picture over the good picture in the second call. Simply setting a switch solves
	that problem.
	
	The second place to call SetPicture() is in CFVView::OnActivateView(), an
	override of the CView method. Check to make sure the view is being activated,
	and then call SetPicture(). This last call is necessary for embedding in
	Microsoft Excel, for example. Microsoft Excel does not deactivate the server
	such that OnDeactivate() is called.
	
	You must also handle the OnGetExtent() to set the initial size of the CFormView
	application and handle OnSetExtent() to receive size changes. You should also
	reset the size when the CFormView::OnSize() is called. If you do not care to
	react to sizing changes these last calls are not necessary. The sample handles
	some sizing problems, but not all. Disabling sizing should be straight forward
	to accomplish.
	
	You must also notify the container whenever the data changes. In this simple
	application, NotifyChanged() is called in the SetPicture(), so any time the
	application changes what the user is seeing, call SetPicture(). There may be
	other places where NotifyChanged() should be called. If you call NotifyChanged()
	without calling SetPicture(), you will get the last metafile that was saved and
	it may not show the current state the user sees.
	
	This application is not "bullet-proof", but is instead a starting point for
	further development.
	
	REFERENCES
	==========
	
	"Inside OLE", second edition, by Kraig Brockschmidt. "OLE 2 Programmer's
	Reference, Vol 1"
	
	Additional query words: meta-file Fvview Fvviewvcnet
	
	======================================================================
	Keywords          : kbfile kbProgramming kbprint kbSample kbPrinting kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,4.2b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
