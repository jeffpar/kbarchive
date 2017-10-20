---
layout: page
title: "Q214605: FP98: How to Uninstall and Reinstall Server Extensions on UNIX"
permalink: /kb/214/Q214605/
---

## Q214605: FP98: How to Uninstall and Reinstall Server Extensions on UNIX

{% raw %}

	Article: Q214605
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows, used with:
	   - the operating system: UNIX 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to uninstall and reinstall the FrontPage98 Server
	Extensions on a UNIX operating system.
	
	MORE INFORMATION
	================
	
	To uninstall the Server Extensions, follow the steps below (Note: you will need
	log in as root):
	
	1. Type the following:
	
	  "cd /usr/local/frontpage/version3.0/bin" (without the quotation marks)
	
	2. In the bin directory is an executable file called Fpsrvadm.exe. Run the
	  executable by typing the following:
	
	  "./fpsrvadm.exe" (without the quotation marks)
	
	3. When you see the list of 15 options to choose from, choose option 3 to
	  uninstall.
	
	4. The default in the brackets is number [1]. Select option 3 and press the
	  Enter key.
	
	5. The next step asks for the port number. The default port is [80] unless you
	  have installed it to a different port. Press the Enter key. If you have
	  installed it to a different port, type in the port number and then press the
	  Enter key.
	
	6. When it informs you that Port 80: uninstall is complete, you will be returned
	  to the bin directory.
	
	To install the Server Extensions, perform the following steps (Note: you will
	need to be logged in as root):
	
	1. Type the following:
	
	  "cd /usr/local/frontpage/version3.0/bin" (without the quotation marks)
	
	2. In the bin directory is an executable file called Fpsrvadm.exe. Run the
	  executable by typing the following:
	
	  "./fpsrvadm.exe" (without the quotation marks)
	
	3. When see the list of 15 options to choose from, choose option 1 to install.
	
	4. The default in the brackets is number [1]. Press the Enter key.
	
	5. The next set of choices is for the type of Web server. Locate the number that
	  corresponds to your Web server, type in the number, and then press the Enter
	  key.
	
	6. The next prompt is for the server config file name. You will need to know
	  where this file is located. The file is Httpd.conf. You will need to type in
	  the entire path, for example /etc/httpd/conf/httpd.conf.
	
	  If you are not sure, type the following command:
	
	  "find / -name httpd.conf -print" (without the quotation marks)
	
	7. The next prompt requests for the host name. Unless your are multihosting your
	  Web server or have a virtual server, press the Enter key.
	
	  If you are multihosting or have a virtual server, type in either the IP
	  address or the Host Name, and then press the Enter key.
	
	8. The next prompt ask for the user name. This is typically going to be the
	  owner of the Web. Type in the user's name and press the Enter key. (This will
	  be used in FrontPage when prompted for a user's name.)
	
	9. The next prompt ask for a password. Type in whatever password you want to
	  assign the Web owner. (This will be used when you are prompted in FrontPage
	  for a password.)
	
	10. Retype the password to confirm it, and then press the Enter key. The install
	  in now complete.
	
	Note: The FrontPage patched Apache servers on UNIX require both the UID (User
	Identification) of the user and GID (Group Identification) of the group that own
	the content are a higher value than the values defined below:
	
	UID
	
	Linux - 15
	All other versions of UNIX - 11
	
	GID
	
	HPUX - 20
	IRIX - 20
	SUNOS4 - 20
	SCO - 24
	All other versions of UNIX - 21
	
	The above restrictions apply only to the Apache Web server, with the Microsoft
	FrontPage patch compiled into it.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
