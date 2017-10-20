---
layout: page
title: "Q315583: HOW TO: Change Web Site Permissions on an IIS Server"
permalink: /kb/315/Q315583/
---

## Q315583: HOW TO: Change Web Site Permissions on an IIS Server

{% raw %}

	Article: Q315583
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Add the AdminScripts Folder to the System Path
	
	   - Windows 2000-Based Computer
	- Windows XP Professional-Based Computer
	
	- Register CScript on the Administration Server
	- Change Permissions for a Web Site
	- Notes
	
	SUMMARY
	=======
	
	This step-by-step article describes how to change the permissions of a Web site
	that is located on one IIS server from another IIS server. You can use the
	Administration Script Utility (Adsutil.exe) to complete this task. The
	Adsutil.exe utility is an ADSI script that is located in the AdminScripts folder
	of IIS.
	
	Add the AdminScripts Folder to the System Path
	----------------------------------------------
	
	Before you can complete the steps in this article, you must add the AdminScripts
	folder to the Windows environment path. If you have already done this, you can
	skip this portion of the article. To add the AdminScripts folder to the Windows
	environment path, use the appropriate method.
	
	Windows 2000-Based Computer:
	
	1. On the Windows 2000 desktop, right-click My Computer, click Properties, and
	  then click the Advanced tab.
	
	2. Click Environment Variables.
	
	3. In the System Variables box, click the line that begins with the word "path."
	
	4. Click Edit.
	
	5. In the Edit System Variable dialog box, put the cursor at the end of the line
	  in the Variable Value box.
	
	6. Type "path\Inetpub\AdminScripts" (without the quotation marks) to add the
	  path to the sample ADSI scripts, where path is the location of the Inetpub
	  folder. For example, ;c:\Inetpub\AdminScripts.
	
	  NOTE: This initial punctuation is explained because each element in the path
	  variable must be separated by a semicolon.
	
	7. Click OK.
	
	Windows XP Professional-Based Computer:
	
	1. On the Windows XP Professional desktop, right-click My Computer, and then
	  click Manage.
	
	2. Right-click Computer Management(Local), and then click Properties.
	
	3. Click the Advanced tab.
	
	4. In the Environment Variables box, click Settings.
	
	5. In the System Variables box, click the line that begins with the word "path."
	
	6. Click Edit.
	
	7. In the Edit System Variable dialog box, put the cursor at the end of the line
	  in the Variable Value box.
	
	8. Type "path\Inetpub\AdminScripts" (without the quotation marks) to add the
	  path to the sample ADSI scripts, where path is the location of the Inetpub
	  folder. For example, ;c:\Inetpub\AdminScripts.
	
	  NOTE: This initial punctuation is explained because each element in the path
	  variable must be separated by a semicolon.
	
	9. Click OK to close the Environment Variables dialog box.
	
	Register CScript on the Administration Server
	---------------------------------------------
	
	The Adsutil.vbs script that you will be running in this article uses CScript. By
	registering Cscript.exe as your default scripting host, you don't have to type
	Cscript.exe in front of the scripts to run them. Skip this task if you don't
	want to register Cscript.exe, or have already registered CScript as your default
	scripting host. To register CScript as your default scripting host:
	
	1. On your administration server, open a command prompt.
	
	2. Type "adsutil" (without the quotation marks), and then press ENTER. If
	  CScript is not the default scripting host on this computer, you receive a
	  "This script does not work with WScript" message. If CScript is already the
	  default scripting host, text that describes how to use the Adsutil.exe tool
	  appears. If this is the case, you can skip the rest of the steps in this
	  section, and complete the final task.
	
	3. Click OK to close the "This script does not work with WScript" dialog box.
	
	4. Click Yes to register CScript, click OK, and then click OK.
	
	Change Permissions for a Web Site
	---------------------------------
	
	To change permissions for a Web site server from another server, type one of the
	following commands at the command prompt (where the bracketed "I" indicates the
	beginning of optional values that may or may not be entered and the bracketed
	"/I" indicates the end of the optional values):
	
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Permission Type               | Command to use                                                                                   | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Allow Script Source Access    | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/accesssource "true" -S:<I>WebServerName</I>       | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Disallow Script Source Access | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/accesssource "false" -S:<I>WebServerName</I>      | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Allow Read Access             | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/accessread "true" -S:<I>WebServerName</I>         | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Disallow Read Access          | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/accessread "false" -S:<I>WebServerName</I>        | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Allow Write Access            | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/accesswrite "true" -S:<I>WebServerName</I>        | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| No Write                      | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/accesswrite "false" -S:<I>WebServerName</I>       | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Allow Directory Browsing      | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/enabledirbrowsing "true" -S:<I>WebServerName</I>  | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	| Disallow Directory Browsing   | Adsutil set w3svc/1/root/<I>VDirectoryName</I>/enabledirbrowsing "false" -S:<I>WebServerName</I> | 
	+----------------------------------------------------------------------------------------------------------------------------------+
	
	Notes
	-----
	
	-S:WebServerName is the syntax to update permissions on a Web server from a
	remote computer on the domain. The user name and password you use to log on to
	the remote computer must be a member of the local administrators group of the
	target Web server.
	
	The Allow Script Source Access is dependent upon WebDAV and may be unavailable if
	WebDAV is not enabled.
	
	For additional help with the Administration Script Utility (Adsutil.exe), type
	"adsutil help" (without the quotation marks) at the command prompt, and then
	press ENTER.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
