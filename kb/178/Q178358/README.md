---
layout: page
title: "Q178358: INFO: October 1997 MSDN Library and Internet Explorer"
permalink: kb/178/Q178358/
---

## Q178358: INFO: October 1997 MSDN Library and Internet Explorer

	Article: Q178358
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:3.02,3.02a,4.0,97,97sp1,97sp2; winnt:
	Operating System(s): 
	Keyword(s): kbIE400 kbInfoViewer kbMSDN kbOSWinNT400 kbVS97 kbOSWin95 kbIE302 _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) October 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article includes information about using Internet Explorer with the October
	1997 release of the Microsoft Developer Network Library (MSDN).
	
	In order for the MSDN Library to function properly, Microsoft Internet Explorer
	version 3.01 or higher should be installed on your system. The version of
	Internet Explorer that you install, should be a released non- beta version,
	Internet Explorer 4.0 is fully supported. There are some features and known
	problems using Internet Explorer 4.0 with the MSDN Library that are addressed in
	this document.
	
	MORE INFORMATION
	================
	
	INSTALLING INTERNET EXPLORER WITH THE MSDN LIBRARY
	
	If you do not have Internet Explorer 3.01 or higher installed, you will be
	prompted during MSDN Setup to install Internet Explorer version 3.02. When you
	select Yes, MSDN setup will halt and display a dialog box saying, "MSDN Setup
	was not completed successfully." You must click OK, complete Internet Explorer
	setup, and then reboot. You must then restart MSDN setup. If you select No, you
	will be required to install Internet Explorer manually.
	
	The U.S. English Internet Explorer Version 3.02b, which includes the Authenticode
	2.0 update, is available on the October 1997 MSDN Library CD1 in the \IE
	subdirectory. To install, run the file Msie302.exe.
	
	To download the latest version of Internet Explorer, connect to
	
	  http://www.microsoft.com/windows/ie/default.htm
	
	USING INTERNET EXPLORER 4.0
	
	Accessibility Enhancements
	--------------------------
	
	Internet Explorer 4.0 includes some new accessibility features that can be used
	within InfoViewer and the MSDN Library. You now have the ability to specify your
	own color, font, style settings so that your settings always override settings
	specified by an MSDN topic or Web site. You can change these settings in
	Internet Explorer 4.0 by selecting Internet Options from the View menu, then
	clicking on the Accessibility button under the General tab. You can modify the
	following settings.
	
	Ignore Colors Specified on Web Pages
	------------------------------------
	
	This option specifies whether you want Internet Explorer to use the color
	settings you choose for text, background, and links. You can set these colors on
	the General tab by clicking the Colors button. If the author of a Web page
	chooses different colors for text and background, the settings you choose here
	will override them. You cannot change the size or color of graphics.
	
	Ignore Font Styles Specified on Web Pages
	-----------------------------------------
	
	The option specifies whether you want Internet Explorer to use the font settings
	you choose. You can set these types on the General tab by clicking the Fonts
	button. If the author of a Web page chooses different fonts, the settings you
	choose here will override them. You cannot change the size or color of
	graphics.
	
	Ignore Font Sizes Specified on Web Pages
	----------------------------------------
	
	This option specifies whether you want Internet Explorer to use the default font
	size you choose. You can set the default font size on the General tab by
	clicking the Fonts button. If the author of a Web page chooses a different
	default font size, the settings you choose here will override it. You cannot
	change the size or color of graphics.
	
	User Style Sheet
	----------------
	
	This option specifies whether you want Internet Explorer to use your own style
	sheet to format all Web pages when they are displayed, and provides a place for
	you to type the path to your style sheet. Style sheets can specify the default
	font style, size, colors, and background for the body text in addition to
	headings.
	
	Problems Accessing Sample Data
	------------------------------
	
	Users of the Integrated Development Environment for Microsoft Visual C++ 5.0,
	Visual InterDev 1.0, or Visual J++ 1.1 who also have Microsoft Internet Explorer
	4.0 installed will receive the following error when selecting a URL in an MSDN
	title that accesses samples:
	
	  Error Accessing Sample Data
	
	Microsoft has confirmed this to be a problem with Visual Studio 97 development
	products. This problem was corrected in Visual Studio 97 service Pack 2. The
	Visual Studio 97 Service Pack 2 is available from the Microsoft Web Site at:
	
	  http://www.msdn.microsoft.com/vstudio/sp/.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	This bug also affects the standalone versions of the MSDN Library prior to
	October 1997. The October release of the Microsoft Development Library includes
	an update required by Internet Explorer 4.0 users who want to access samples
	from within an MSDN title. This update affects only the MSDN executable,
	Iv5.exe. Users of the IDE who wish to benefit from this fix as well can get it
	one of two ways:
	
	- Install the Visual Studio 97 Service Pack 2
	
	  -or-
	
	- Copy the file containing the fix, Ivauto.dll, from the MSDN CD1 to the
	  directory containing IDE executable. For example, if you installed Visual C++
	  to its default directory, C:\Program Files\DevStudio, you would copy
	  Ivauto.dll as follows:
	
	     From:  Disc 1 subdirectory  \x86\bin\IVAUTO.DLL
	     To:  C:\Program Files\DevStudio\SharedIDE\Bin\IVAUTO.DLL
	
	Problem with Font Sizes Appearing Very Small in Some Topics
	-----------------------------------------------------------
	
	This problem is caused by changes in stylesheet support in Internet Explorer 4.0.
	The best workaround is to change your accessibility settings in Internet
	Explorer 4.0 and choose to ignore font sizes. This problem will be fixed in the
	documentation of a future release of the MSDN Library.
	
	Problem with Very Narrow Table Columns in MFC Documentation
	-----------------------------------------------------------
	
	Some documentation for MFC in Visual C++ 5.0 will appear improperly formatted
	when using Internet Explorer 4.0. The Class Members topics in the Class Library
	reference uses table columns that are formatted incorrectly using hardcoded
	point sizes. The descriptions display as a very narrow column. There is no good
	workaround for this problem. The MSDN team will fix this in the next quarterly
	library release.
	
	Transact SQL Topic is Blacked Out
	---------------------------------
	
	This problem is caused by a mistake in the underlying HTML. The background color
	setting is incorrectly authored. The good news is there is no documentation in
	this section. It is a simple reference to the new location of the Transact SQL
	documentation. The documentation titled "Transact-SQL Reference" is now
	integrated with the Platform SDK documentation on the MSDN Library. You can find
	this information in the Microsoft SQL Server Programmer's Toolkit located in the
	Database and Messaging Services section of the Platform SDK.
	
	Known Problems in Internet Explorer 4.0 Beta Preview Releases
	-------------------------------------------------------------
	
	- Downloading samples from an MSDN topic did not work at all in some Internet
	  Explorer 4.0 preview releases. This was fixed in newer releases. Connect to:
	
	  http://www.msdn.microsoft.com
	
	  to download the latest version of Internet Explorer.
	
	- Downloading samples with a space in the filename does not work. You may
	  receive the following error message:
	
	  Error copying file
	
	  If you experience this problem then you may need to use Internet Explorer 3.02
	  or download the file from the MSDN Library Online at
	  http:/msdn.microsoft.com/msdn/library/.
	
	- Some Internet Explorer 4.0 beta releases had prevented InfoViewer users from
	  changing the font size of topics. This has been corrected. Connect to:
	
	  http://www.msdn.microsoft.com
	
	  to download the latest version of Internet Explorer.
	
	- Some Internet Explorer 4.0 preview releases caused crashes when viewing
	  InfoViewer Titles if ratings were enabled. This has also been fixed.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Steve
	Alboucq, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIE400 kbInfoViewer kbMSDN kbOSWinNT400 kbVS97 kbOSWin95 kbIE302 _IK 
	Technology        : kbMSDNSearch kbZNotKeyword2 kbMSDNOct97
	Version           : WINDOWS:3.02,3.02a,4.0,97,97sp1,97sp2; winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
