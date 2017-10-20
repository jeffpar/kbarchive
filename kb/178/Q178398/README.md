---
layout: page
title: "Q178398: SssccSP2.exe: &quot;The Database is Unavailable...&quot; When Opening Proj"
permalink: /kb/178/Q178398/
---

## Q178398: SssccSP2.exe: &quot;The Database is Unavailable...&quot; When Opening Proj

{% raw %}

	Article: Q178398
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbSSafe500bug kbVS97sp3fix
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing the Visual Studio 97 Service Pack 3 and opening a project under
	source control, you may get the following error:
	
	  Microsoft Visual SourceSafe
	  The database is unavailable. Would you like to disable source control
	  integration?
	
	There are two possible causes:
	
	- You have set up a user name using the Visual SourceSafe administrator that is
	  not the same as the user name you use to log into your workstation and the
	  SourceSafe user name has a password.
	
	- You have the same user name in Visual SourceSafe as you use to log into your
	  workstation, but you have deselected "Use network name for automatic user log
	  in" in the Visual SourceSafe Administrator, Tools menu, Options menu item,
	  General tab.
	
	Use one of the following resolutions as a workaround:
	
	- After you start your developer application, but before you open a project
	  that is under source control, start the Visual SourceSafe Explorer from the
	  Project menu, Source Control submenu in Visual C++ or Tools menu, Visual
	  SourceSafe submenu in Visual Basic. This will present you with a login
	  dialog. After a successful login, you will be able to open the project under
	  source control in Visual Studio.
	
	- Using the Visual SourceSafe Administrator, check "Use network name for
	  automatic user log in" in the Tools menu, Options menu item, General tab.
	  Then make sure that all user names match the login names used to log into
	  Windows NT and/or Windows 95. The Visual SourceSafe passwords are ignored
	  during login in this case.
	
	- If you are using a Visual SourceSafe login name that is different than your
	  login name for Windows, then don't use a password.
	
	- Roll back to the Service Pack 2 (05.00.2220) version of Ssscc.dll that is in
	  SssccSP2.exe. Please see the MORE INFORMATION section for instructions on
	  obtaining this file.
	
	  The following file is the only file included in SssccSP2.exe:
	
	  Ssscc.dll, version 05.00.2220
	
	
	- "set" the SSUSER and SSPWD environment variables using the following
	  procedure:
	
	  Method 1
	  --------
	
	  Setting a command prompt shell environment. You need to do this each time you
	  open the application.
	  a. Open a command prompt and type something, such as set ssuser=guest. If
	     this user has a password, you must also set the SSPWD variable, such as
	     set sspwd=password.
	
	  b. While still in the command prompt, use "cd" to change to the install
	     location of your development application and start it up.
	
	  Method 2
	  --------
	
	  Setting the Windows shell environment. In Windows NT:
	  a. Right-click My Computer and click the Environment tab.
	
	  b. Put the cursor in the Variable: text box and type SSUSER.
	
	  c. Hit tab to the Value: text box and type in a valid Visual SourceSafe login
	     name, such as guest. If this user has a password, you must also set the
	     SSPWD variable in the same manner.
	
	  d. Click OK.
	
	  e. Restart Windows NT.
	
	  In Windows 95:
	  a. Add the following two line to the Autoexec.bat:
	
	  set ssuser=<username>
	  set sspwd=<password>
	
	  b. Save and restart Windows 95.
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  SssccSP2.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In Visual C++:
	
	1. Set up a user using the Visual SourceSafe Administrator that isn't the same
	  name as your Windows account name. Make sure you enter a password.
	
	2. Start Visual Studio. On the Tools menu, select Options, click the SourceSafe
	  tab, and type in the Visual SourceSafe login name you will be using.
	
	3. Open a project that is under source control.
	
	  -or-
	
	1. Set up a user using SourceSafe Administrator that is the same name as your
	  Windows account. On the Tools menu, select Options, and deselect the "Use
	  network name for automatic user log in" check box.
	
	2. Start Visual Studio. On the Tools menu, select Options, click the SourceSafe
	  tab, and type in the Visual SourceSafe login name you will be using.
	
	3. Open a project that is under source control.
	
	In Visual Basic:
	
	1. Set up a user using the Visual SourceSafe Administrator that isn't the same
	  name as your Windows account name. Make sure you enter a password.
	
	2. Start Visual Basic.
	
	3. Open a project that is under source control.
	
	  -or-
	
	1. Set up a user using Visual SourceSafe Administrator that is the same name as
	  your Windows account. On the Tools menu, select Options, and deselect the
	  "Use network name for automatic user log in" check box.
	
	2. Start Visual Basic.
	
	3. Open a project that is under source control.
	
	Additional query words: service pack servicepack ssscc.dll
	
	======================================================================
	Keywords          : kbfile kbSSafe500bug kbVS97sp3fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
