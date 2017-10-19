---
layout: page
title: "Q165101: HOWTO: Use a Windows 95/98/Me Computer as DCOM Server"
permalink: /kb/165/Q165101/
---

## Q165101: HOWTO: Use a Windows 95/98/Me Computer as DCOM Server

	Article: Q165101
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDCOM kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 27-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use a Microsoft Windows 95, Windows 98, or Windows Me computer as a
	Distributed Component Object Model (DCOM) server, you need to install and
	configure the computer specifically to run DCOM applications. This article tells
	you both how to install DCOM and how to configure Windows 95/98/ME to become a
	DCOM server.
	
	NOTE: Using a Windows Windows 95, Windows 98, or Windows Me computer as a DCOM
	server does not provide the same features as a Windows NT 4.0 or Windows 2000
	computer. Performance and security are more limited. Additionally, you have to
	perform some steps manually that are provided automatically by Windows NT and
	Windows 2000. For instance, you need to start your server application manually
	and have it waiting for remote clients while Windows 2000 and Windows NT launch
	it for you when needed. In addition, you need to make sure that Rpcss.exe in the
	Windows\System folder is running. The DCOM release notes, listed in the
	"References" section later in this article, provide the complete list of
	differences for Windows 95 and Windows 98.
	
	MORE INFORMATION
	================
	
	DCOM is included as part of Windows NT 4.0, Windows 2000, and Windows
	Millennium. DCOM version 1.2 is included in Windows 98. To use the latest
	version of DCOM with Windows 95 or Windows 98, you need to download and install
	DCOM, as well as configure the computer to run DCOM applications. To use DCOM
	with Windows Millennium, you only need to configure the computer to run DCOM
	applications.
	
	NOTE: Although Windows 98 and Windows Me already include DCOM, they do not
	include the DCOMCNFG utility. You can download the DCOMCNFG utility from the
	same locations that are mentioned below.
	
	Download and Install DCOM on Windows 95 or Windows 98
	-----------------------------------------------------
	
	To download and install DCOM on a Windows 95 computer, follow the download
	instructions available on the following Microsoft Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/download.asp
	
	To download and install DCOM on a Windows 98 computer, follow the download
	instructions available on the following Microsoft Web site:
	
	  http://www.microsoft.com/com/dcom/dcom98/download.asp
	
	Configure the Computer to Run DCOM Applications
	-----------------------------------------------
	
	1. On the Start menu, select Run, and type: "Dcomcnfg" (without the quotation
	  marks).
	
	2. On the Default Properties tab, select Enable Distributed COM on this
	  computer.
	
	3. On the Default Security tab, select Enable remote connection.
	
	4. On the Default Security tab, click Edit Default.
	
	5. In the Access Permissions dialog box, click Add to grant or deny access to
	  users of the server. Click OK to close the Add Access Permissions dialog box,
	  click OK again to close the Access Permissions dialog box, and then click
	  Apply to put your access permissions into effect.
	
	6. On the Applications tab, select the server component you want to run on this
	  computer and click Properties.
	
	7. On the Location tab, select Run application on this computer.
	
	  NOTE: This assumes that the server application you want to run on this
	  computer is already installed on the computer.
	
	8. Close all windows to close dcomcnfg.
	
	Place a shortcut to the server component that you want to automate through DCOM
	into the startup group. This is a good technique to ensure that the component is
	started at startup. The server component must be running before a client can
	access it.
	
	Server Applications
	-------------------
	
	A server application needs to remain running so that remote client applications
	can access it. The easiest way to keep a server application running is to load a
	blank form in the server application. Use the following steps to load a blank
	Form when you start the ActiveX EXE server:
	
	1. On the Project menu, select Add Form. Form1 is added by default.
	
	2. Set the Visible property of Form1 to False.
	
	3. On the Project menu, select Add Module. Module1 is added by default.
	
	4. Paste the following code in the code window of Module1:
	
	  Option Explicit
	
	  Public Sub Main()
	    Load Form1
	  End Sub
	
	5. On the Project menu, select Project Properties. In the General tab, select
	  Sub Main as the Startup Object.
	
	6. For the server to be able to receive calls, you need to make sure that
	  Rpcss.exe (in the Windows\System folder) is running. If it doesn't start by
	  default, you can add it to your start up group so that it starts
	  automatically when the system boots up.
	
	REFERENCES
	==========
	
	The release notes for DCOM include a section describing the differences between
	DCOM for Windows 95 or Windows 98 and DCOM for Windows NT 4.0 or Windows 2000.
	This is a very important section to read.
	
	The DCOM release notes for Windows 95 are located at the following Microsoft Web
	site:
	
	  http://www.microsoft.com/com/dcom/dcom95/relnotes.asp
	
	The DCOM release notes for Windows 98 are located at the following Microsoft Web
	site:
	
	  http://www.microsoft.com/com/dcom/dcom98/relnotes.asp
	
	Additional query words: rpcss
	
	======================================================================
	Keywords          : kbDCOM kbVBp kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
