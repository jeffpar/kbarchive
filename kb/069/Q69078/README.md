---
layout: page
title: "Q69078: Printing Text Reports"
permalink: kb/069/Q69078/
---

## Q69078: Printing Text Reports

	Article: Q69078
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin310 kbDSupport kbOSWin300 kbSDKWin16 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample program REPMKR in the Microsoft Download Center demonstrates the code
	required to print a report. The report generator prints plain-text reports in
	monospace fonts either on a printer or in a print-preview window. The code to
	handle printer display contexts is encapsulated in the report generator code.
	The interface does not require the host program to work with printing code.
	
	NOTE: This sample was originally written for Windows 3.0. Applications targeted
	for Windows 3.1 should modify this sample's code to utilize the Common Dialog
	boxes.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Repmkr.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The three functions of the report generator are as follows:
	
	  Function                        Description
	  --------                        -----------
	  PrinterSetupDialog(void)        Brings up the standard Printer
	                                  Setup dialog box
	
	  PrinterSelectDialog(void)       Allows the user to select a printer
	                                  for use by the report generator
	
	  PrinterControl(int iCommand,    Controls page layout
	
	     int iParam, LPSTR szParam)
	
	The following is the table of specific commands:
	
	  iCommand         iParam                 szParam
	  --------         ------                 -------
	  PC_SETCOLS       # of columns/page      Not used
	
	  PC_SETROWS       # of rows/page         Not used
	
	  PC_PRINT         Not used               Not used
	
	  PC_CLEARALL      Not used               Not used
	
	  PC_ADDLINE       -1 for next line,      LPSTR to line of text
	                   (n) for line # to add
	
	  PC_ADDBAR        -1 for width of page   LPSTR to character
	                   (n) for bar width      (NULL will print '-')
	
	  PC_SETPAGENUM    Page number            Not used
	
	  PC_SETHEADERn    Not used               LPSTR to header,
	                                          NULL will clear
	
	  PC_ADDHEADERn    Not used               Not used
	
	  PC_SETFOOTER1    Not used               LPSTR to header,
	                                          NULL will clear
	
	  PC_ADDFOOTER1    Not used               Not used
	
	  PC_STARTJOB      Not used               Not used
	
	  PC_ENDJOB        TRUE = OK,             Not used
	                   FALSE = Abort
	
	  PC_SETTITLE      Not used               LPSTR to title
	                                          of print job
	
	  PC_SETPRINTMODE  PC_CODE_PRINT or       Not used
	                   PC_CODE_PREVIEW
	
	In the REPMKR archive file is a sample program BASE that demonstrates how to use
	these functions.
	
	Each header is printed on every page, unless it is set to NULL. Each footer is
	printed on every page, unless it is set to NULL. The title of the print job is
	displayed in the "printing" message box.
	
	Additional query words: REPMKR.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin310 kbDSupport kbOSWin300 kbSDKWin16 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
