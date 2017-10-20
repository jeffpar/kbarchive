---
layout: page
title: "Q315599: HOW TO: Create a Virtual Web Server by Using an ADSI Script in I"
permalink: /kb/315/Q315599/
---

## Q315599: HOW TO: Create a Virtual Web Server by Using an ADSI Script in I

{% raw %}

	Article: Q315599
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Add the AdminScripts Directory to the System Path
	- Register CScript on the Administration Server
	- Create a Web Site using the MKW3Site Script
	
	SUMMARY
	=======
	
	This step-by-step article describes how to create a new virtual Web server. The
	tool that is used to complete this task is MKW3SITE, which is a ADSI script that
	is located in the AdminScripts directory of IIS. Note that MKW3SITE only
	creates, and sets some of the properties of, the virtual directory. MKW3SITE
	does not create the actual Web site files.
	
	Add the AdminScripts Directory to the System Path
	-------------------------------------------------
	
	Before you can carry out the steps in this article, you need to add the
	AdminScripts directory to the Windows environment path. If you have already done
	this, you can skip this portion of the article.
	
	To add AdminScripts to the Windows environment path, follow these steps:
	
	1. On the Windows 2000 desktop, right-click My Computer and click Properties.
	
	2. In the System Properties dialog box, click the Advanced tab.
	
	3. Click Environment Variables.
	
	4. In the System Variables box, select the line that begins with the word
	  "path."
	
	5. Click Edit.
	
	6. In the Edit System Variable dialog box, place the cursor at the end of the
	  line in the Variable Value box.
	
	7. Type ";C:\Inetpub\AdminScripts" (without the quotation marks) to add the path
	  to the sample ADSI scripts.
	
	NOTE: Each element in the path variable must be separated by a semicolon.
	
	8. Click OK to close the Environment Variables dialog box.
	
	Register CScript on the Administration Server
	---------------------------------------------
	
	The Adsutil.vbs script that you will run uses CScript. If you register
	Cscript.exe as your default scripting host, you do not have to type Cscript.exe
	in front of the scripts to run them. Skip this task if you do not want to
	register CScript.exe, or if you have already registered CScript as your default
	scripting host.
	
	To register CScript as your default scripting host, follow these steps:
	
	1. On your administration server, open a command prompt.
	
	2. Type "mkw3site" (without the quotation marks) and press ENTER.
	
	  NOTE: If CScript is already the default scripting host, text that describes
	  how to use adsutil appears. If this is the case, you can skip the rest of the
	  steps in this task and go to the final task.
	
	  If CScript is not the default scripting host on this computer, you receive a
	  dialog box that states that the script does not work with WScript.
	
	3. Click OK to close the This script does not work with WScript dialog box.
	
	4. Click Yes to register CScript, and then click OK.
	
	Create a Virtual Web Server using MKW3Site
	------------------------------------------
	
	After you have set the path, you can create the virtual Web server using
	WKW3SITE.
	
	To create the virtual Web server, follow these steps:
	
	1. If necessary, create a new folder to which the virtual folder will refer (for
	  example, C:\MyWebs\Accounting).
	
	2. On your administration server, open a command prompt.
	
	3. At the command prompt on the server, type "mkw3site -r <path>
	  --DontStart -t "MyVirtual Site" -o 80 -i xxx.xxx.xxx.xxx" (without the
	  quotation marks).
	
	The command parameters are as follows:
	
	   - ?r is the root directory of the Web site.
	
	   - <path> is the path to directory where you want to store the files of
	     the new Web site (for example, C:\MyWebs\Accounting).
	
	   - ?DontStart creates the Web site in a stopped state. To start the site, you
	     must activate it through the IIS snap-in, or from the command line by
	     typing "net start w3svc" (without the quotation marks).
	
	   - ?t defines the title of the Web site.
	
	   - ?o defines the port number.
	
	   - ?i defines the IP address for the Web site.
	
	   - xxx.xxx.xxx.xxx is the IP address of the Web site as defined in the TCP/IP
	     properties of the network connection (for example, 172.16.100.1).
	
	For additional help with the Administration Script Utility, type "mkw3site help"
	(without the quotation marks) at the command prompt.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
