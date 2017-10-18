---
layout: page
title: "Q83365: PvtDlg.exe Demonstrates Using Private Dialog-Box Class"
permalink: kb/083/Q83365/
---

## Q83365: PvtDlg.exe Demonstrates Using Private Dialog-Box Class

	Article: Q83365
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbWndw kbWndwClass kbWndwProp
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pvtdlg.exe is a file in the Microsoft Download Center that demonstrates using a
	private dialog-box class in an application. The PVTDLG application demonstrates
	using a private dialog-box class by itself and in conjunction with another
	dialog box procedure. PVTDLG registers a private dialog-box class that specifies
	a number of additional window extra bytes. The sample stores the colors to paint
	each window in the allocated space.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Pvtdlg.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	A private dialog-box class is a technique that allows one callback procedure to
	process messages that are common to several different dialog boxes. The private
	dialog-box class encapsulates code that would otherwise be repeated in each
	dialog procedure.
	
	When Windows has a message for a dialog box that is a member of a private
	dialog-box class, it calls the private dialog-box class procedure. After the
	private dialog-box class procedure completes its processing, it must call the
	DefDlgProc function.
	
	The next step depends on the contents of the lpDialogFunc parameter in the
	application's call to the CreateDialog or DialogBox functions. If lpDialogFunc
	is NULL, the DefDlgProc function performs its default processing for the message
	and processing of that message is complete. If lpDialogFunc is not NULL,
	DefDlgProc calls the specified procedure. If the dialog box procedure returns
	FALSE, DefDlgProc performs its default processing for the message. If the dialog
	box procedure returns any other value, DefDlgProc skips the default processing
	and returns.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbWndw kbWndwClass kbWndwProp kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
