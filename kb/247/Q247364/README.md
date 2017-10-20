---
layout: page
title: "Q247364: IIS Sample ADSI Script to Create FTP Virtual Servers"
permalink: /kb/247/Q247364/
---

## Q247364: IIS Sample ADSI Script to Create FTP Virtual Servers

{% raw %}

	Article: Q247364
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) version 5.0 includes several
	sample Windows Scripting Host (WSH) administration scripts in the
	%SystemDrive%\InetPub\AdminScripts folder. These sample scripts perform various
	administrative functions. The purpose of this article is to define a sample
	script to complement the existing set of scripts that create FTP virtual
	servers.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	WSH Sample ADSI Script:
	
	1. Save the following code as Mkftpsite.vbs in your
	  %SystemDrive%\InetPub\AdminScripts folder:
	
	  '------------------------------------------------------------
	  '
	  ' This is a simple script to create a new virtual FTP server.
	  '
	  ' Call this script with "-?" for usage instructions
	  '
	  '------------------------------------------------------------
	
	  ' Force explicit declaration of all variables
	  Option Explicit
	
	  On Error Resume Next
	
	  Dim bArgStart
	  Dim bVerbose
	  Dim iArgPort
	  Dim iArgSiteNumber
	  Dim iArgNum
	  Dim oArgs
	  Dim szArgComputers
	  Dim szArgIPAddress
	  Dim szArgRootDirectory
	  Dim szArgServerComment
	
	  bArgStart = True
	  bVerbose = False
	  iArgPort = 21
	  iArgSiteNumber = 0
	  szArgIPAddress = ""
	  szArgComputers = Array(1)
	  szArgComputers(0) = "LocalHost"
	
	  Set oArgs = WScript.Arguments
	  iArgNum = 0
	
	  While iArgNum < oArgs.Count
	
	    Select Case LCase(oArgs(iArgNum))
	      Case "-o","--port":
	        iArgNum = iArgNum + 1
	        iArgPort = oArgs(iArgNum)  
	      Case "-i","--ipaddress":
	        iArgNum = iArgNum + 1
	        szArgIPAddress = oArgs(iArgNum)
	      Case "-r","--rootdirectory":
	        iArgNum = iArgNum + 1
	        szArgRootDirectory = oArgs(iArgNum)
	      Case "-t","--comment":
	        iArgNum = iArgNum + 1
	        szArgServerComment = oArgs(iArgNum)
	      Case "-c","--computer":
	        iArgNum = iArgNum + 1
	        szArgComputers = Split(oArgs(iArgNum),",",-1)
	      Case "-n","--sitenumber":
	        iArgNum = iArgNum + 1
	        iArgSiteNumber = CLng(oArgs(iArgNum))
	      Case "-d","--dontstart":
	        bArgStart = False
	      Case "-?","--help":
	        Call DisplayUsage
	      Case "-v","--verbose":
	        bVerbose = True
	      Case Else:
	        WScript.Echo "Unknown argument " & oArgs(iArgNum)
	        Call DisplayUsage
	    End Select  
	
	    iArgNum = iArgNum + 1
	  Wend
	
	  If (szArgRootDirectory = "") Or (szArgServerComment = "") Then
	    If (szArgRootDirectory = "") Then
	      WScript.Echo "Missing Root Directory"
	    Else
	      WScript.Echo "Missing Server Comment"
	    End If
	    Call DisplayUsage
	    WScript.Quit(1)
	  End If
	
	  Call ASTCreateFtpSite(szArgIPAddress, szArgRootDirectory, szArgServerComment, iArgPort, szArgComputers, iArgSiteNumber, bArgStart)
	
	  Sub ASTCreateFtpSite(szIPAddress, szRootDirectory, szServerComment, iPortNum, szComputers, iSiteNumber, bStart)
	    Dim bDone
	    Dim iComputerIndex
	    Dim iIndex
	    Dim oFtpServer
	    Dim oFtpSite
	    Dim oMsFtpSvc
	    Dim oNewFtpServer
	    Dim oNewDir
	    Dim szBindings
	    Dim szBindingString
	    Dim szComp
	    Dim szNewBindings
	
	    On Error Resume Next
	
	    For iComputerIndex = 0 To UBound(szComputers)
	      szComp = szComputers(iComputerIndex)
	      If iComputerIndex <> UBound(szComputers) Then
	        Trace "Creating FTP site on " & szComp & "."
	      End If
	
	      ' Grab the ftp service object
	      Err.Clear
	      Set oMsFtpSvc = GetObject("IIS://" & szComp & "/MSFTPSVC")
	      If Err.Number <> 0 Then
	        Display "Unable to open: " & "IIS://" & szComp & "/MSFTPSVC"
	      End If
	
	      szBindingString = szIPAddress & ":" & iPortNum & ":"
	      Trace "Making sure this FTP server doesn't conflict with another..."
	      For Each oFtpServer in oMsFtpSvc
	        If oFtpServer.Class = "IIsFtpServer" Then
	          szBindings = oFtpServer.ServerBindings
	          If szBindingString = szBindings(0) Then
	            Display "The server bindings you specified are duplicated in another virtual FTP server."
	            WScript.Quit (1)
	          End If
	        End If
	      Next
	
	      iIndex = 1
	      bDone = False
	      Trace "Creating new FTP server..."
	
	      ' If the user specified a SiteNumber, then use that.  Otherwise,
	      ' test successive numbers under MSFTPSVC until an unoccupied slot is found
	      If iSiteNumber <> 0 Then
	        Set oNewFtpServer = oMsFtpSvc.Create("IIsFtpServer", iSiteNumber)
	        oNewFtpServer.SetInfo
	        If (Err.Number <> 0) Then
	          WScript.Echo "Couldn't create a FTP site with the specified number: " & iSiteNumber
	          WScript.Quit (1)
	        Else
	          Err.Clear
	          ' Verify that the newly created site can be retrieved
	          Set oFtpSite = GetObject("IIS://" & szComp & "/MSFTPSVC/" & iSiteNumber)
	          If (Err.Number = 0) Then
	            bDone = True
	            Trace "FTP server created. Path is - " & "IIS://" & szComp & "/MSFTPSVC/" & iSiteNumber
	          Else
	            WScript.Echo "Couldn't create a FTP site with the specified number: " & iSiteNumber
	            WScript.Quit (1)
	          End If
	        End If
	      Else
	        While (Not bDone)
	          Err.Clear
	          Set oFtpSite = GetObject("IIS://" & szComp & "/MSFTPSVC/" & iIndex)
	
	          If (Err.Number = 0) Then
	            ' A ftp server is already defined at this position so increment
	            iIndex = iIndex + 1
	          Else
	            Err.Clear
	            Set oNewFtpServer = oMsFtpSvc.Create("IIsFtpServer", iIndex)
	            oNewFtpServer.SetInfo
	            If (Err.Number <> 0) Then
	              ' If call to Create failed then try the next number
	              iIndex = iIndex + 1
	            Else
	              Err.Clear
	              ' Verify that the newly created site can be retrieved
	              Set oFtpSite = GetObject("IIS://" & szComp & "/MSFTPSVC/" & iIndex)
	              If (Err.Number = 0) Then
	                bDone = True
	                Trace "FTP server created. Path is - " & "IIS://" & szComp & "/MSFTPSVC/" & iIndex
	              Else
	                iIndex = iIndex + 1
	              End If
	            End If
	          End If
	
	          ' sanity check at 10K sites
	          If (iIndex > 10000) Then
	            Display "Seem to be unable to create new FTP server.  Server number is " & iIndex & "."
	            WScript.Quit (1)
	          End If
	        Wend
	      End If
	
	      szNewBindings = Array(0)
	      szNewBindings(0) = szBindingString
	      oNewFtpServer.ServerBindings = szNewBindings
	      oNewFtpServer.ServerComment = szServerComment
	      oNewFtpServer.SetInfo
	
	      ' Now create the root directory object.
	      Trace "Setting the home directory..."
	      Set oNewDir = oNewFtpServer.Create("IIsFtpVirtualDir", "ROOT")
	      oNewDir.Path = szRootDirectory
	      oNewDir.AccessRead = True
	      Err.Clear
	      oNewDir.SetInfo
	
	      If (Err.Number = 0) Then
	        Trace "Home directory set."
	      Else
	        Display "Error setting home directory."
	      End If
	
	      Trace "FTP site created!"
	
	      If bStart = True Then
	        Trace "Attempting to start new FTP server..."
	        Err.Clear
	        Set oNewFtpServer = GetObject("IIS://" & szComp & "/MSFTPSVC/" & iIndex)
	        oNewFtpServer.Start
	        ' the next line "debounces" some startup errors
	        WScript.Sleep 5000
	        If (Err.Number <> 0) Or (oNewFtpServer.ServerState <> 2) Then
	          Display "Error starting FTP server!"
	          Err.Clear
	        Else
	          Trace "FTP server started succesfully!"
	        End If
	      End If
	    Next
	  End Sub
	
	  ' Display the usage message
	  Sub DisplayUsage
	    WScript.Echo "Usage: mkftpsite <-r|--RootDirectory ""ROOT DIRECTORY"">"
	    WScript.Echo "                 <-t|--Comment       ""SERVER COMMENT"">"
	    WScript.Echo "                 [-c|--Computer      COMPUTER1[,COMPUTER2...]]"
	    WScript.Echo "                 [-o|--Port          PORT NUM]"
	    WScript.Echo "                 [-i|--IPAddress     IP ADDRESS]"
	    WScript.Echo "                 [-n|--SiteNumber    SITENUMBER]"
	    WScript.Echo "                 [-d|--DontStart]"
	    WScript.Echo "                 [-v|--Verbose]"
	    WScript.Echo "                 [-?|--Help]"
	    WScript.Echo ""
	    WScript.Echo "IP ADDRESS       Optional - The IP Address to assign to the new server"
	    WScript.Echo "PORT NUM         Optional - The port to which the server should bind"
	    WScript.Echo "ROOT DIRECTORY   Required - Full path to the root directory for the new server"
	    WScript.Echo "SERVER COMMENT   Required - The server comment (this is the name that appears"
	    WScript.Echo "                            in the MMC)"
	    WScript.Echo "SITENUMBER       Optional - The site number is the number in the ADSI path that"
	    WScript.Echo "                            the FTP server will be created at (i.e. MSFTPSVC/3)"
	    WScript.Echo ""
	    WScript.Echo "Example 1: mkftpsite -r D:\Roots\MyCompany --DontStart -t ""My Company Site"""
	    WScript.Echo "Example 2: mkftpsite -r C:\Inetpub\ftproot -t Test -o 1021"
	    WScript.Quit (1)
	  End Sub
	
	  Sub Display(Msg)
	    WScript.Echo Now & " : ERROR: " & Msg
	    WScript.Echo Now & " : ERROR: 0x" & Hex(Err.Number) & " - " & Err.Description
	  End Sub
	
	  Sub Trace(Msg)
	    If bVerbose = True then
	      WScript.Echo Now & " : " & Msg  
	    End If
	  End Sub
	
	2. Call this script with the following syntax for full usage instructions:
	
	  
	  C:\>CSCRIPT %SystemDrive%\InetPub\AdminScripts\MKFTPSITE.VBS -?
	
	For more information on Microsoft scripting technologies, see the following Web
	site:
	
	  http://msdn.microsoft.com/scripting/
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
