---
layout: page
title: "Q149495: Remote Control Fails with Lowercase Computer Name"
permalink: /kb/149/Q149495/
---

## Q149495: Remote Control Fails with Lowercase Computer Name

{% raw %}

	Article: Q149495
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Windows client was originally inventoried by SMS with a lowercase NetBIOS
	computer name, Remote Control may fail with the following error:
	
	  UNABLE TO LOCATE CLIENT
	
	MORE INFORMATION
	================
	
	Windows versions 3.11 and later automatically convert the computer name to
	uppercase when writing to the System.ini file.
	
	If the computer name in the System.ini or Sms.ini file is changed to lowercase
	after the initial inventory, the problem does not occur. This problem only
	occurs if the computer was originally inventoried with a lowercase name and
	appears with a lowercase name in the SMS Administrator.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Edit the ComputerName= in the [Network] section of System.ini so that the
	  computer name is entirely in uppercase characters.
	
	2. Connect to the SMS_SHR on your logon server.
	
	3. At a command prompt, make that share your current drive and change your
	  current directory to X86.BIN.
	
	4. Run invdos /f.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : :1.0,1.1
	
	=============================================================================
	

{% endraw %}
