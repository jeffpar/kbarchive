---
layout: page
title: "Q254808: IIS Sample ADSI Script to Create FTP Virtual Directories"
permalink: /kb/254/Q254808/
---

## Q254808: IIS Sample ADSI Script to Create FTP Virtual Directories

	Article: Q254808
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
	administrative functions. This article gives a sample script to create FTP
	virtual directories to complement the existing set of scripts.
	
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
	
	1. Save the following code as Mkftpdir.vbs in your
	  %SystemDrive%\InetPub\AdminScripts folder:
	
	  '------------------------------------------------------------
	  '
	  ' This is a simple script to create a new virtual FTP directory.
	  '
	  ' Call this script with "-?" for usage instructions
	  '
	  '------------------------------------------------------------
	
	  ' Force explicit declaration of all variables.
	  Option Explicit
	
	  On Error Resume Next
	
	  Dim oArgs, ArgNum
	
	  Dim ArgComputer, ArgFtpSites, ArgVirtualDirs, ArgDirNames(), ArgDirPaths(), DirIndex
	  Dim ArgComputers
	
	  Set oArgs = WScript.Arguments
	  ArgComputers = Array("LocalHost")
	
	  ArgNum = 0
	  While ArgNum < oArgs.Count
	
	    If (ArgNum + 1) >= oArgs.Count Then
	      Call DisplayUsage
	    End If
	
	    Select Case LCase(oArgs(ArgNum))
	      Case "--computer", "-c":
	        ArgNum = ArgNum + 1
	        ArgComputers = Split(oArgs(ArgNum), ",", -1)
	      Case "--ftpsite", "-f":
	        ArgNum = ArgNum + 1
	        ArgFtpSites = oArgs(ArgNum)
	      Case "--virtualdir", "-v":
	        ArgNum = ArgNum + 1
	        ArgVirtualDirs = Split(oArgs(ArgNum), ",", -1)
	      Case "--help", "-?"
	        Call DisplayUsage
	    End Select
	
	    ArgNum = ArgNum + 1
	  Wend
	
	  ArgNum = 0
	  DirIndex = 0
	
	  ReDim ArgDirNames((UBound(ArgVirtualDirs) + 1) \ 2)
	  ReDim ArgDirPaths((UBound(ArgVirtualDirs) + 1) \ 2)
	
	  If IsArray(ArgVirtualDirs) Then
	    While ArgNum <= UBound(ArgVirtualDirs)
	      ArgDirNames(DirIndex) = ArgVirtualDirs(ArgNum)
	      If (ArgNum + 1) > UBound(ArgVirtualDirs) Then
	        WScript.Echo "Error understanding virtual directories"
	        Call DisplayUsage
	      End If
	      ArgNum = ArgNum + 1
	      ArgDirPaths(DirIndex) = ArgVirtualDirs(ArgNum)
	      ArgNum = ArgNum + 1
	      DirIndex = DirIndex + 1
	    Wend
	  End If
	
	  If (ArgFtpSites = "") Or (IsArray(ArgDirNames) = False Or IsArray(ArgDirPaths) = False) Then
	    Call DisplayUsage
	  Else
	    Dim compIndex
	    For compIndex = 0 To UBound(ArgComputers)
	      Call ASTCreateVirtualFtpDir(ArgComputers(compIndex), ArgFtpSites, ArgDirNames, ArgDirPaths)
	    Next
	  End If
	
	  '------------------------------------------------------------
	
	  Sub Display(Msg)
	    WScript.Echo Now & ". Error Code: " & Hex(Err) & " - " & Msg
	  End Sub
	
	  Sub Trace(Msg)
	    WScript.Echo Now & " : " & Msg
	  End Sub
	
	  Sub DisplayUsage()
	    WScript.Echo "Usage: mkftpdir [--computer|-c COMPUTER1,COMPUTER2]"
	    WScript.Echo "                <--ftpsite|-f FTPSITE1>"
	    WScript.Echo "                <--virtualdir|-v NAME1,PATH1,NAME2,PATH2,...>"
	    WScript.Echo "                [--help|-?]"
	
	    WScript.Echo ""
	    WScript.Echo "Note, FTPSITE is the Ftp Site on which the directory will be created."
	    WScript.Echo "The name can be specified as one of the following, in the priority specified:"
	    WScript.Echo " Server Number (i.e. 1, 2, 10, etc.)"
	    WScript.Echo " Server Description (i.e ""My Server"")"
	    WScript.Echo " Server Host name (i.e. ""ftp.domain.com"")"
	    WScript.Echo " IP Address (i.e., 127.0.0.1)"
	    WScript.Echo ""
	    WScript.Echo ""
	    WScript.Echo "Example : mkftpdir -c MyComputer -f ""Default Ftp Site"""
	    WScript.Echo "           -v ""dir1"",""c:\inetpub\ftproot\dir1"",""dir2"",""c:\inetpub\ftproot\dir2"""
	
	    WScript.Quit
	  End Sub
	
	  '------------------------------------------------------------
	
	  Sub ASTCreateVirtualFtpDir(ComputerName, FtpSiteName, DirNames, DirPaths)
	    Dim computer, ftpSite, FtpSiteID, vRoot, vDir, DirNum
	    On Error Resume Next
	    
	    Set ftpSite = findFtp(ComputerName, FtpSiteName)
	    If IsObject(ftpSite) Then
	      Set vRoot = ftpSite.GetObject("IIsFtpVirtualDir", "Root")
	      Trace "Accessing root for " & ftpSite.ADsPath
	      If (Err <> 0) Then
	        Display "Unable to access root for " & ftpSite.ADsPath
	      Else
	        DirNum = 0
	        If (IsArray(DirNames) = True) And (IsArray(DirPaths) = True) And (UBound(DirNames) = UBound(DirPaths)) Then
	          While DirNum < UBound(DirNames)
	            'Create the new virtual directory
	            Set vDir = vRoot.Create("IIsFtpVirtualDir", DirNames(DirNum))
	            If (Err <> 0) Then
	              Display "Unable to create " & vRoot.ADsPath & "/" & DirNames(DirNum) & "."
	            Else
	              'Set the new virtual directory path
	              vDir.AccessRead = True
	              vDir.Path = DirPaths(DirNum)
	              If (Err <> 0) Then
	                Display "Unable to bind path " & DirPaths(DirNum) & " to " & vRootName & "/" & DirNames(DirNum) & ". Path may be invalid."
	              Else
	                'Save the changes
	                vDir.SetInfo
	                If (Err <> 0) Then
	                  Display "Unable to save configuration for " & vRootName & "/" & DirNames(DirNum) & "."
	                Else
	                  Trace "Ftp virtual directory " & vRootName & "/" & DirNames(DirNum) & " created successfully."
	                End If
	              End If
	            End If
	            Err = 0
	            DirNum = DirNum + 1
	          Wend
	        End If
	      End If
	    Else
	      Display "Unable to find " & FtpSiteName & " on " & ComputerName
	    End If
	    Trace "Done."
	  End Sub
	
	  Function getBinding(bindstr)
	
	    Dim one, two, ia, ip, hn
	    
	    one = InStr(bindstr, ":")
	    two = InStr((one + 1), bindstr, ":")
	    
	    ia = Mid(bindstr, 1, (one - 1))
	    ip = Mid(bindstr, (one + 1), ((two - one) - 1))
	    hn = Mid(bindstr, (two + 1))
	    
	    getBinding = Array(ia, ip, hn)
	  End Function
	
	  Function findFtp(computer, ftpname)
	    On Error Resume Next
	
	    Dim ftpsvc, site
	    Dim ftpinfo
	    Dim aBinding, binding
	
	    Set ftpsvc = GetObject("IIS://" & computer & "/MsFtpSvc")
	    If (Err <> 0) Then
	      Exit Function
	    End If
	    ' First try to open the ftpname.
	    Set site = ftpsvc.GetObject("IIsFtpServer", ftpname)
	    If (Err = 0) And (Not IsNull(site)) Then
	      If (site.Class = "IIsFtpServer") Then
	        ' Here we found a site that is a ftp server.
	        Set findFtp = site
	        Exit Function
	      End If
	    End If
	    Err.Clear
	    For Each site In ftpsvc
	      If site.Class = "IIsFtpServer" Then
	        ' First, check to see if the ServerComment matches
	        If site.ServerComment = ftpname Then
	          Set findFtp = site
	          Exit Function
	        End If
	        aBinding = site.ServerBindings
	        If (IsArray(aBinding)) Then
	          If aBinding(0) = "" Then
	            binding = Null
	          Else
	            binding = getBinding(aBinding(0))
	          End If
	        Else
	          If aBinding = "" Then
	            binding = Null
	          Else
	            binding = getBinding(aBinding)
	          End If
	        End If
	        If IsArray(binding) Then
	          If (binding(2) = ftpname) Or (binding(0) = ftpname) Then
	            Set findFtp = site
	            Exit Function
	          End If
	        End If
	      End If
	    Next
	  End Function
	
	2. Call this script with the following syntax for full usage instructions:
	
	  CSCRIPT %SystemDrive%\InetPub\AdminScripts\MKFTPDIR.VBS -?
	
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
	
