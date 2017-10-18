---
layout: page
title: "Q68301: SAMPLE: Spdsheet.exe - Developing a Spreadsheet App for Windows"
permalink: kb/068/Q68301/
---

## Q68301: SAMPLE: Spdsheet.exe - Developing a Spreadsheet App for Windows

	Article: Q68301
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbCtrl kbSDKPlatform kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A spreadsheet, such as Microsoft Excel, is used to store and manipulate data. It
	has a rectangular grid arranged in columns and rows. The intersection of each
	column and row is a cell, the basic unit of a spreadsheet in which the
	application stores data.
	
	To develop a spreadsheet application, the predefined control types (such as list
	boxes and edit controls) should not be used to represent cells. These controls
	have limitations that preclude using them for large scale purposes.
	
	The information below describes a more efficient alternative to using predefined
	controls when creating a spreadsheet type application. There is a file in the
	Microsoft Download Center named SPDSHEET that contains the sample code to
	demonstrate such an application.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Spdsheet.exe
	  (http://download.microsoft.com/download/platformsdk/sample65/3.1/W31/EN-US/Spdsheet.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The main technique used to develop a spreadsheet application for Windows is to
	draw vertical and horizontal lines on a window to represent the cells of a
	spreadsheet. Mouse hit-testing is then done to track the currently active
	spreadsheet cell. To enter the spreadsheet data, only one edit control is used.
	The most recent data is painted simultaneously on the current cell as it is
	entered by the user. To store the spreadsheet data internally, an array of the
	desired data type is created.
	
	All the spreadsheet data and other visual information is repainted on the main
	window whenever the application gets a WM_PAINT message.
	
	The SPDSHEET sample application uses Windows API function calls to paint the
	spreadsheet cells. It draws all of the solid lines using MoveTo() and LineTo()
	functions. The vertical dotted lines are drawn by calling LineDDA(), which in
	turn calls a callback function that draws pixels. The application uses
	DrawText() to display column letters and row numbers. The highlight on the
	current cell is achieved by inverting the bits on all four sides of the cell.
	
	Since this is a simplified version of a spreadsheet, the sample application
	creates an array of 100 strings to represent spreadsheet data. The developers of
	a spreadsheet application can choose to use their own data type.
	
	The SPDSHEET example also creates two other windows on the upper side of its
	client area. One is a static window to display the position of the current
	selected cell and the other is an edit control that is used to enter spreadsheet
	data. As the data is entered to the edit control, it is also drawn to the
	current selected cell using DrawText().
	
	Upon receiving a WM_LBUTTONDOWN message, the application removes the highlight
	from the currently selected cell and calculates the location of the newly
	selected cell. The application highlights the newly selected cell and copies the
	cell's contents to the edit control. The static window is also updated to
	display the location of the newly selected cell.
	
	The information corresponding to each cell's location is not stored by SPDSHEET
	because the cell size is constant and the location can be calculated. If, on the
	other hand, the cells were of variable sizes, some location information would
	have to be stored and managed by the application.
	
	When the application receives a WM_PAINT message, it repaints its entire client
	area, including the whole entire array of spreadsheet data. To make this process
	more efficient, the application can make use of the invalid region information
	sent by Windows through the PAINTSTRUCT structure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbCtrl kbSDKPlatform kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
