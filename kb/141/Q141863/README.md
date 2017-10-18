---
layout: page
title: "Q141863: SAMPLE: Bdlg32.exe Draws a Bitmap in an MFC Dialog Box"
permalink: kb/141/Q141863/
---

## Q141863: SAMPLE: Bdlg32.exe Draws a Bitmap in an MFC Dialog Box

	Article: Q141863
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbBitmap kbDlg kbGDI kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kb
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Microsoft Foundation Class (MFC) Library application for Windows, it is
	occasionally useful to be able to display a bitmap larger than a normal icon in
	a dialog box. This can either be done using the resource editor or at run time.
	The Bdlg32.exe sample demonstrates four methods for placing a bitmap on a dialog
	box.
	
	NOTE: This is the 32-bit version of this sample.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Bdlg32.exe
	  (http://download.microsoft.com/download/vc60std/sample/6.0/W9X2K/EN-US/Bdlg32.exe)
	
	Release Date: Sept-18-2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	NOTE: Use the -d option when you run Bdlg32.exe, to decompress the file and
	recreate the proper directory structure.
	
	To display a bitmap using the resource editor place a picture control on a dialog
	template. Bring up the properties dialog for the picture control and associate
	the control with a bitmap type (SS_BITMAP style) and an image by specifying a
	bitmap resource ID. If you want to associate a bitmap resource ID with the
	picture control only at run time or if you would like to change the bitmap at
	run time then use the function CStatic::SetBitmap().
	
	
	There are four possible methods to display a bitmap at runtime:
	
	- BitBlt() a bitmap onto the dialog box in its OnDraw() handler.
	
	- BitBlt() or StretchBlt() into a "static" frame control.
	
	- BitBlt() or StretchBlt() in OnEraseBkgnd().
	
	- Use a CBitmapButton as a picture control.
	
	The Bdlg32.exe sample demonstrates these four methods for placing a bitmap on a
	dialog box.
	
	Method 1: BitBlt() in OnDraw()
	------------------------------
	
	The first method uses a simple BitBlt(), when the dialog box receives a WM_PAINT
	message, to paint a bitmap in a hard-coded location on a dialog box. This method
	demonstrates the following:
	
	- Using LoadBitmap().
	
	- Creating a compatible memory device context (DC).
	
	- Saving a handle to an object selected out of a DC between messages.
	
	- Using BitBlt().
	
	- Cleaning up a loaded bitmap and memory DC when finished with them.
	
	Because this is a common technique, a basic version of the few steps needed to
	draw a bitmap on a dialog box using MFC are listed below. These steps assume you
	have already created a C++ class, named CMyDlg, and that it has been associated
	with either a dialog box template created in Visual Studio or with a dialog
	editor.
	
	1. Add a bitmap resource with an ID of IDB_MYBITMAP (or whatever ID you want) to
	  your project. With App Studio, you can do this by either creating a new
	  bitmap resource and setting the ID, or by importing an already created bitmap
	  with a .BMP extension.
	
	2. Add a WM_PAINT handler to your CMyDlg class. To do this in Visual Studio
	  .NET, click to select the CMyDlg class node in the Class View window, open
	  the Properties window, click the Messages icon, locate the WM_PAINT window
	  message, and then add an OnPaint handler through the Properties window. With
	  earlier versions of Visual C++, just use Class Wizard to add an OnPaint()
	  handler to your dialog box class.
	
	3. Now, your OnPaint() function will have to load and use BitBlt() to paint the
	  bitmap in your resource onto the dialog box. The code to do this is the
	  following:
	
	        void CMyDlg::OnPaint()
	        {
	           CPaintDC dc( this ); // Device context for painting
	
	           CBitmap bmp, *poldbmp;
	           CDC memdc;
	
	           // Load the bitmap resource
	           bmp.LoadBitmap( IDB_CORPLOGO );
	
	           // Create a compatible memory DC
	           memdc.CreateCompatibleDC( &dc );
	
	           // Select the bitmap into the DC
	           poldbmp = memdc.SelectObject( &bmp );
	
	           // Copy (BitBlt) bitmap from memory DC to screen DC
	           dc.BitBlt( 10, 10, 47, 47, &memdc, 0, 0, SRCCOPY );
	
	           memdc.SelectObject( poldbmp );
	
	           // Do not call CDialog::OnPaint() for painting messages
	        }
	
	  After adding this code and adding an OnPaint entry to the message map for your
	  CMyDlg class, you should see the bitmap image displayed in the dialog box at
	  run time.
	
	Note that the first four parameters to CDC::BitBlt() depend on your program and
	the size of the bitmap resource. The first two (10, 10) position the upper-left
	corner where the bitmap will be drawn on the dialog box's client area. The
	second two (47, 47) specify the width and height of the bitmap area to copy over
	in logical units. These dimensions can be less than the size of the actual
	bitmap. The sixth and seventh parameters specify the upper-left corner of the
	bitmap in the memory DC to start copying from.
	
	One other thing to note is that the CDC and CPaintDC objects in the code above
	are created on the stack so you do not need to call the Windows API functions
	DeleteDC() and ReleaseDC() on the memory and paint DC objects, respectively.
	
	For more information about bitmaps and device contexts, refer to the
	documentation for the Windows API and MFC versions of BitBlt(), SelectObject(),
	and CreateCompatibleDC(). For a more complete example of this, please see the
	BDLG32 sample.
	
	Method 2: BitBlt() or StretchBlt() in "Static" Frame Control
	------------------------------------------------------------
	
	The second method uses StretchBlt() and, using techniques similar to those in the
	"Paint" dialog box, draws the bitmap in the client area of a "static" picture
	frame control.
	
	The BDLG32 sample associates a CStatic member variable with the static control by
	using the Add Variable menu when the static control is selected in the Dialog
	Editor.
	
	NOTE: Adding a static control in the Visual C++ 6.0 and Visual C++ .NET designers
	generates a default ID of IDC_STATIC for the control. The Dialog Editor does not
	permit you to associate a member variable with a control with the ID of
	IDC_STATIC. Change the ID of the static control in the Properties window to an
	ID that is defined by your application so that you can add a member variable of
	type CStatic to the dialog class.
	
	In addition to these techniques, Method 2 demonstrates calculating the client
	area of a child control. Note that subclassing the CStatic member (after
	associating the control to a class member variable, just change the type in the
	header from CStatic to a class you've derived from CStatic) allows you to have
	the subclassed control paint a bitmap in its client area when it receives a
	WM_PAINT.
	
	Method 3: BitBlt() or StretchBlt() in OnEraseBkgnd()
	----------------------------------------------------
	
	The third method StretchBlt's the bitmap onto the background of a dialog box in
	the dialog box's WM_ERASEBKGND handler, OnEraseBkgnd(). It also demonstrates
	handling WM_CTLCOLOR messages and returning background brushes from that handler
	(transparent in this case).
	
	Method 4: CBitmapButton as Picture Control
	------------------------------------------
	
	The fourth and last method uses a CBitmapButton class to
	CBitmapButton::AutoLoad() a bitmap into a disabled owner-draw button on a dialog
	box. It is probably the simplest method of the four, although it does not allow
	for much flexibility or changing of what is being painted to reflect changes in
	the dialog box.
	
	In Visual Studio .NET, you must add a member variable of type CButton because the
	wizard does not allow you to associate CBitmapButton objects directly. After you
	add the CButton derived class, edit the source file to derive the class from
	CBitmapButton instead.
	
	Please note the following when creating your resources for using a CBitmapButton
	class. When you add the button to your dialog box template, which you will later
	be associating with a CBitmapButton, the ID is relatively unimportant, but the
	button must be set as owner-draw in the Properties window and the caption text
	will be used to load your bitmap. If your button caption text is "BITB", you
	should create your bitmap and give it an ID of "BITBU". Your bitmap ID MUST have
	the double quotation marks or it will be saved as just a numeric ID and fail to
	load when you use CBitmapButton::AutoLoad(). See the documentation for
	CBitmapButton for more information.
	
	Additional query words: BDLG 4.0 4.00 4.1 4.10 4.2 4.20
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbBitmap kbDlg kbGDI kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
