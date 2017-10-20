---
layout: page
title: "Q232449: Sample ASP Code May be Used to View Unsecured Server Files"
permalink: /kb/232/Q232449/
---

## Q232449: Sample ASP Code May be Used to View Unsecured Server Files

{% raw %}

	Article: Q232449
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the following Active Server Page (ASP) sample files on a
	computer running Internet Information Server (IIS) 4.0, a Web visitor may be
	able to use these files to gain access to and read any known file on the same
	logical disk as the installed ASP code, which is not protected by setting the
	system Access Control Lists (ACLs) for these files:
	
	- <IIS_DIRECTORY>\Iissamples\Exair\Howitworks\Code.asp
	
	- <IIS_DIRECTORY>\Iissamples\Exair\Howitworks\Codebrws.asp
	
	- <IIS_DIRECTORY>\Iissamples\Sdk\Asp\Docs\Codebrws.asp
	
	- <Program_Files>\<Common_Files>\System\Msadc\Samples\Selector\Showcode.asp
	
	Please note, however, that the Web visitor cannot change, delete, or add any
	files.
	
	CAUSE
	=====
	
	The installed ASP code was never intended for anything other than demonstration
	purposes and does not restrict which files a visitor to a Web site can view.
	
	WORKAROUND
	==========
	
	Remove all copies of Showcode.asp, Code.asp, and CodeBrws.asp from the
	production server, or set the ACLs for each of these files so that only the
	appropriate users have access.
	
	NOTE: Per normal security practices, the ACLs on the server should always be set
	to enable Web visitors to view only the files they need, and to deny access to
	all others.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size  File name                Platform
	  -------------------------------------------------------------------------
	  5/17/99   1:17PM               3Kb   Code.asp                 <x86>
	  5/17/99   1:17PM               8Kb   Codebrw1.asp             <x86>
	  5/17/99   1:17PM               8Kb   Codebrw2.asp             <x86>
	  5/17/99   1:17PM               6Kb   Showcode.asp             <x86>
	  5/17/99   1:17PM               3Kb   Code.asp                 <alpha>
	  5/17/99   1:17PM               8Kb   Codebrw1.asp             <alpha>
	  5/17/99   1:17PM               8Kb   CodeBrw2.asp             <alpha>
	  5/17/99   1:17PM               6Kb   Showcode.asp             <alpha>
	
	This hotfix has been posted to the following Internet location as Fix2450I.exe
	(Intel) or Fix2450A.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/Viewcode-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	4.0.
	
	MORE INFORMATION
	================
	
	Microsoft highly recommends that customers evaluate the degree of risk that this
	vulnerability poses to their systems and determine whether to download and
	install the fix.
	
	This fix corrects the vulnerability by restricting Showcode.asp, Code.asp, and
	CodeBrws.asp to viewing only files in the current directory. However, Web site
	operators who do not have a need to provide the file viewing capability may
	choose to remove all copies OF Showcode.asp, Code.asp, and CodeBrws.asp from the
	server altogether.
	
	Environment in Which These ASP Files May Cause Security Risk
	------------------------------------------------------------
	
	Security exposure is limited to the situation in which all of the following
	conditions are true:
	
	- Servers have the sample sites installed.
	
	- The sample sites are not protected by ACLs (Access Control Lists).
	
	- Sensitive data exists on the same logical drive as Showcode.asp, Code.asp,
	  and CodeBrws.asp.
	
	- Files containing sensitive data allow the "Everyone" user group read or
	  greater access in the ACL.
	
	- Malicious users know the path and file name of files that contain sensitive
	  data.
	
	Installing the Fix
	------------------
	
	The fix installation program (Fix2450I.exe [Intel] and Fix2450A.exe [Alpha])
	automatically replaces existing Showcode.asp, Code.asp, and CodeBrws.asp files.
	
	NOTE: The default installation directories listed below the fix installation
	package will attempt to locate the files as they were installed onto the
	effected system. After you install the fix, you should perform a complete disk
	search for these files to verify that all instances of these files have been
	replaced. If your IIS 4.0 installation was installed into a different directory
	than the default directory, then you must verify that the effected files have
	been removed and replaced by performing a full disk search for these files.
	
	- <IIS_DIRECTORY>\Iissamples\Exair\Howitworks\Code.asp
	
	- <IIS_DIRECTORY>\Iissamples\Exair\Howitworks\Codebrws.asp
	
	- <IIS_DIRECTORY>\Iissamples\Sdk\Asp\docs\Codebrws.asp
	
	- <Program_Files>\<Common_Files>\System\Msadc\Samples\Selector\Showcode.asp
	
	A complete installation of the sample code for Internet Information Server 4.0
	and the Internet SDK will install various copies of Showcode.asp, Code.asp, and
	CodeBrws.asp in different directories. Therefore, if you to choose to remove it,
	perform a full-disk search to locate all copies.
	
	To manually extract the modified ASP files from the distribution fix, do the
	following:
	
	1. Copy the distribution file (Fix2450I or Fix2450A as appropriate) to a
	  temporary location.
	
	2. Open a command prompt and change to that directory.
	
	3. On the command line type "Fix2450I.EXE /T:c:\temp /C" or "Fix2450A.EXE
	  /T:c:\temp /C" as appropriate. This command will extract the files to the
	  location of c:\temp.
	
	4. Various installation files will be extracted, but the effected files are as
	  follows:
	
	- Code.asp (this file is installed in the %Program Files%\Microsoft Visual
	  Studio\VIntDev98\Sample\Gallery\content directory)
	
	- CODEBRW1.ASP (this file is installed in the \iissamples\ExAir\HowItWorks
	  directory)
	
	- CODEBRW2.ASP (this file is installed in the \Iissamples\Sdk\asp\Docs\
	  directory)
	
	- Showcode.asp
	
	NOTE: Showcode.asp, Code.asp, and CodeBrws.asp should always have the ACL
	permissions set to Administrators only, or to a group that is limited to Web
	content developers.
	
	Please note that you may have to extract and copy the files manually if the hot
	fix installation will not complete.
	
	
	IMPORTANT NOTE: The Codebrws.asp file has the same name in both of the target
	directories. However, for the purpose of the hot fix, it is given different
	names so that they are differentiated. The hot fix installer will rename place
	and rename them appropriately. If you manually install them, however, you will
	need to rename them appropriately.
	
	Code Changes in the Fix
	-----------------------
	
	Showcode.asp, Code.asp, and CodeBrws.asp files use "server.mappath" without any
	restrictions on what is passed to this function. Because Showcode.asp, Code.asp,
	and CodeBrws.asp allow a user to enter a path and filename, a malicious user
	could gain access to and read (read-only) any known file on the same logical
	disk as Showcode.asp, Code.asp, and CodeBrws.asp, which are not protected (no
	ACLs set).
	
	The code added to Code.asp is as follows:
	
	(Note: These lines of code may wrap):
	
	  <SCRIPT LANGUAGE=VBScript RUNAT=Server>
	  REM **************************************
	  REM intended behavior:
	  REM allow access to only .asp, .htm, .html, .inc files
	  REM in some directory starting from /IISSAMPLES
	  REM and without .. in the path
	  REM **************************************
	  FUNCTION fValidPath (ByVal strPath)
	  If InStr(1, strPath, "/iissamples/", 1) Then
	  ' the beginning of the string looks good
	  Dim dwLen
	  Dim SomeKnownExtension
	  SomeKnownExtension = false
	  dwLen = Len(strPath)
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-5,strPath,".html",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".htm",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".asp",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".inc",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  fValidPath = 0
	  Exit Function
	  End If
	  ' now the most important part: look for ..
	  If InStr(1,strPath,"..",1) Then
	  fValidPath = 0
	  Else
	  fValidPath = 1
	  End If
	  Else
	  fValidPath = 0
	  End If
	  END FUNCTION
	  </SCRIPT>
	
	The following code was removed from Code.asp:
	
	(Note: These lines of code may wrap):
	
	  < ' Function to determine if a file exists
	  Function FileExists(Source)
	  On Error Resume Next
	
	  strFilename = Server.MapPath(Source)
	  Set FileObject = Server.CreateObject("Scripting.FileSystemObject")
	
	  FileExists = False
	
	  ' Attempt to open the file
	  Set oTempStream = FileObject.OpenTextFile(strFilename, 1, FALSE, TRUE )
	  If Err = 0 Then FileExists = True
	  End Function
	  %>
	
	The following code was added to ShowCode.asp
	
	(Note: These lines of code may wrap):
	
	  REM *************** NOTICE ****************
	  REM * This file may only be used to view *
	  REM * source code of .asp files in the *
	  REM * AdvWorks or ASP Sample directory. *
	  REM * If you wish to change the security *
	  REM * on this, modify or remove this *
	  REM * function. *
	  REM ***************************************
	
	  REM **************************************
	  REM intended behavior:
	  REM allow access to only .asp, .htm, .html, .inc files
	  REM in some directory starting from /Msdac
	  REM and without .. in the path
	  REM **************************************
	
	  FUNCTION fValidPath (ByVal strPath)
	  If InStr(1, strPath, "/Msadc/", 1) Then
	  ' the beginning of the string looks good
	  Dim dwLen
	  Dim SomeKnownExtension
	  SomeKnownExtension = false
	  dwLen = Len(strPath)
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-5,strPath,".html",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".htm",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".asp",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".inc",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  fValidPath = 0
	  Exit Function
	  End If
	  ' now the most importan part: look for ..
	  If InStr(1,strPath,"..",1) Then
	  fValidPath = 0
	  Else
	  fValidPath = 1
	  End If
	  Else
	  fValidPath = 0
	  End If
	  END FUNCTION
	
	  </SCRIPT>
	
	The following code was added to CodeBrws.asp:
	
	(Note: These lines of code may wrap):
	
	  REM **************************************
	  REM intended behavior:
	  REM allow access to only .asp, .htm, .html, .inc files
	  REM in some directory starting from /IISSAMPLES
	  REM and without .. in the path
	  REM **************************************
	
	  FUNCTION fValidPath (ByVal strPath)
	  If InStr(1, strPath, "/iissamples/", 1) Then
	  ' the beginning of the string looks good
	  Dim dwLen
	  Dim SomeKnownExtension
	  SomeKnownExtension = false
	  dwLen = Len(strPath)
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-5,strPath,".html",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".htm",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".asp",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  If InStr(dwLen-4,strPath,".inc",1) Then
	  SomeKnownExtension = true
	  End If
	  End If
	  If Not SomeKnownExtension Then
	  fValidPath = 0
	  Exit Function
	  End If
	  ' now the most importan part: look for ..
	  If InStr(1,strPath,"..",1) Then
	  fValidPath = 0
	  Else
	  fValidPath = 1
	  End If
	  Else
	  fValidPath = 0
	  End If
	  END FUNCTION
	  </SCRIPT>
	
	Purpose of Showcode.asp, Code.asp, and CodeBrws.asp, and Related MSDN Samples
	-----------------------------------------------------------------------------
	
	The purpose of Showcode.asp, Code.asp, and CodeBrws.asp. is to show the Web
	content developer the code that makes the sample sites work. This type of
	function is also used on the Web author's workshop on the MSDN site
	(http://msdn.microsoft.com/workshop/c-frame.htm#/workshop/author/default.asp).
	
	If you base your content on one of the sample sites, remove the buttons (links)
	that load the code into Showcode.asp, Code.asp, and CodeBrws.asp to display it.
	
	Installing Samples and Documentation on Production Servers
	----------------------------------------------------------
	
	Most Internet Information Server 4.0 users do not install the sample sites on
	their production servers, just as they do not install the documentation. They
	are not typically needed on the production servers, as they use additional disk
	space. Because they are just samples, they may not be secure in a production
	environment.
	
	If you have a need to include the samples on a production server, consider
	restricting access to your developers only.
	
	Additional References
	---------------------
	
	For more information related to this issue, please see the following:
	
	  Microsoft Security Bulletin MS99-013, "Patch Available for ViewCode.asp
	  Vulnerability" (The Web-posted version of this bulletin),
	  http://www.microsoft.com/security/bulletins/ms99-013.asp
	
	For additional security-related information about Microsoft products, please
	visit:
	
	  http://www.microsoft.com/security
	
	Additional query words: patch hotfix hot fix qfe default setup set up viewcode utility hacker breach read see source
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
