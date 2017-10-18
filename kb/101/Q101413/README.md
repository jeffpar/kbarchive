---
layout: page
title: "Q101413: HOWTO: Diagnosing Printing Problems in Your Application"
permalink: kb/101/Q101413/
---

## Q101413: HOWTO: Diagnosing Printing Problems in Your Application

	Article: Q101413
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbappnote
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you are in the midst of development and concentrating on coding, it is easy
	to lose sight of problem areas external to your application. When diagnosing a
	printing problem in your application, there are three major areas to be aware
	of:
	
	- Environment/network issues
	
	- Printer and printer driver issues
	
	- Application coding issues
	
	You should rule out a problem in the first two areas before making any coding
	changes.
	
	MORE INFORMATION
	================
	
	Environment/Network Issues
	--------------------------
	
	Check List:
	
	1. Do other applications print correctly?
	
	2. Try a clean boot.
	
	3. Can you print to a local printer?
	
	4. Try different Print Setup and Print Manager settings.
	
	5. Ensure that there's enough disk space in the TEMP directory.
	
	Do other Windows-based applications such as Paintbrush or Microsoft Write print
	successfully? If they do not, then the problem probably isn't with your
	application. You should try a clean boot (starting your computer after all
	unnecessary commands have been removed from your CONFIG.sys and AUTOEXEC.bat
	files) to help narrow down the problem.
	
	Try printing to a local printer to ensure that the problem isn't related to your
	network. If your application prints correctly to a local printer and not to the
	network printer, the problem could be with incorrect network settings.
	
	Is Print Manager enabled? If not, try enabling Print Manager. Try turning off the
	Fast Printing Direct To Port option if it's on. For additional information about
	how these settings affect printing in Windows, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q82746 General Information About Print Manager and Windows 3.1
	
	  Q82747 How Windows Prints to a Network
	
	Make sure there's enough disk space for the temp files that are created during
	printing. If the TEMP environment variable points to a network drive, make sure
	it has the correct permissions set on it.
	
	Printer and Driver Issues
	-------------------------
	
	Check List:
	
	1. Test with various printer drivers.
	
	2. Check the Windows Drivers Library (WDL) for an updated printer driver.
	
	3. Test with different display drivers.
	
	4. Check for incorrect printer and Print Manager settings.
	
	5. Reinstall the printer driver.
	
	It is important to test with several different printers to determine whether the
	problem happens only on a specific printer. If so, be sure to check the WDL to
	determine whether there's an updated driver for the printer.
	
	Be sure to test printing on machines with different display drivers. Printer
	drivers normally do not support all output functions and rely on GDI to assist.
	In many cases, GDI in turn calls into the display driver to do the actual work.
	So, a bug in the display driver could show up during printing. For example, test
	with the standard VGA driver that shipped with Windows 3.1 and another display
	driver with more capabilities such as the 8514/a.
	
	Check for incorrect settings on the printer. Make sure the printer is set up
	correctly in Print Manager. Check that the correct properties, printer port, and
	so on, have been specified. It's possible the printer driver file is corrupt.
	Try removing the printer driver through Control Panel, deleting the printer
	driver file (along with deleting UNIDRIV.dll if appropriate) and reinstalling
	the driver through Control Panel.
	
	Application Coding Issues
	-------------------------
	
	Check List:
	
	1. Compare your code to PRNTFILE and/or DIBVIEW.
	
	2. Implement banding in your application.
	
	3. Check all return codes to narrow down the problem.
	
	4. Set up HDC after each NEWFRAME, EndPage, or NEXTBAND.
	
	5. Make sure each EndPage() has a matching StartPage().
	
	6. Use QUERYESCSUPPORT.
	
	7. If printing bitmaps, use Device-Independent Bitmaps (DIBs).
	
	Do the Windows Software Development Kit (SDK) sample programs PRNTFILE and
	DIBVIEW print correctly on your system? If so, comparing your code to these
	samples will be useful. Note that there is a minor bug in PRNTFILE. To fix it,
	move to where the bAbort flag in PRNTFILE.C is initialized to right after the
	IDM_PRINT case, before any calls to escape. Without this fix, with some
	printers, if you begin printing, cancel, and try to print again, you will
	receive an error on the STARTDOC escape. This is because some printer drivers
	call your application's abort procedure during STARTDOC, and the bAbort flag has
	not been reinitialized after canceling the previous print job.
	
	Do you do banding (using the NEXTBAND and BANDINFO escapes) in your application?
	This is particularly important if you are doing a lot of graphics output or you
	are making calls to the SDK region functions. There have been problem reports
	concerning the region functions consuming GDI resources in nonbanding
	applications, and at this time the only known resolution is to implement banding
	in your application.
	
	If you don't do banding in your application then Windows does it for you by
	creating a disk-based metafile and then playing back the entire metafile into
	each printer band. Using the NEXTBAND escape eliminates the disk-based metafile
	so the printing process is greatly simplified. As an added benefit, you should
	notice an increase in performance. After adding the NEXTBAND escape, try
	optimizing your code even more using the BANDINFO escape.
	
	The sample program DIBVIEW demonstrates the correct usage of both the NEXTBAND
	and BANDINFO escapes.
	
	The Microsoft Developer Network (MSDN) CD article "Printing" is a must read for
	anyone implementing printing under Windows. Keep in mind that the article was
	written around the time Windows 3.1 was released when the problems with the
	Windows banding/metafile code were not known. Because of this, the article does
	not emphasize the importance of implementing banding in your application.
	
	If you are just learning about printing under Windows, or if you are considering
	implementing banding in your application, the Printing Self-Study Module has a
	great deal of information and sample code ready for your use. For more
	information about the Printing Self-Study Module, see the following application
	note in the Microsoft Knowledge Base:
	
	  Appnote: PW0778: Printing Self-Study Module
	
	Here's a few other ideas:
	
	- The escapes NEXTBAND and NEWFRAME and the EndPage function reset the printer
	  HDC to default values. If you've made any changes to the printer HDC such as
	  selecting in GDI objects (fonts, pens, brushes, and so forth) or changing the
	  mapping mode, then you must set up the printer HDC again. The symptom here is
	  that the first page prints fine and subsequent pages do not.
	
	- Make sure each call to EndPage() has a matching StartPage(). EndPage() fails
	  (return -1) if StartPage() has not been called.
	
	- Have you set an Abort procedure and is it properly exported? The Windows 3.0
	  PostScript driver version 3.3 causes an Unrecoverable Application Error (UAE)
	  if there isn't an Abort procedure. With all the hundreds of Windows printer
	  drivers available, it is best to avoid unnecessary complications and just set
	  a simple Abort procedure.
	
	- If you're trying to mix the PASSTHROUGH escape with calls to GDI functions
	  then you must do banding and use the PASSTHROUGH escape on the first band
	  only.
	
	- Use QUERYESCSUPPORT before calling printer escapes to make sure that the
	  printer driver supports the escape you want to call next.
	
	- If you are printing bitmaps, always use DIBs (device independent bitmaps).
	  Use the sample program WINCAP or DIBVIEW as a model for printing DIBs. Query
	  the Microsoft Knowledge Base for more information about these samples.
	
	Additional query words: appnote GdiPrnBanding
	
	======================================================================
	Keywords          : kbOSWin310 _IK 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
