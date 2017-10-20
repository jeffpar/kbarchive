---
layout: page
title: "Q142163: Setup of OS/2 Logon Servers Fails Under WinNT 3.51 SP3"
permalink: /kb/142/Q142163/
---

## Q142163: Setup of OS/2 Logon Servers Fails Under WinNT 3.51 SP3

{% raw %}

	Article: Q142163
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbMaintMan smsmaintman
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Systems Management Server (SMS) will not set up an OS/2 logon server
	if the site server is running Windows NT 3.51 Service Pack (SP) 3. There is a
	change in Windows NT 3.51 SP3 that does not allow execution of a DIR command on
	the UNC name of an OS/2 1.3 server share. When this command is executed, the
	response is always "File Not Found." This behavior does not apply to Windows NT
	3.51 SP2.
	
	
	CAUSE
	=====
	
	The Maintenance Manager uses the above technique as a way of verifying that it
	can see the OS/2 server share. Since this fails, no files get downloaded to the
	logon server's SMS_SHR. The result is that the SMS Administrator UI believes
	that the logon servers are configured correctly, but in fact the OS/2 logon
	server is nonoperational.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbMaintMan smsmaintman 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : :1.1,1.2
	
	=============================================================================
	

{% endraw %}
