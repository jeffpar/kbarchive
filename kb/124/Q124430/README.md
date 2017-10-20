---
layout: page
title: "Q124430: Information on the SMSLOG.TXT File"
permalink: /kb/124/Q124430/
---

## Q124430: Information on the SMSLOG.TXT File

{% raw %}

	Article: Q124430
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMSLOG.TXT is created by APPSTART and SMSETUP to log all errors by these
	applications. It can be found on your Systems Management Server client, in your
	<WINROOT> directory. If it does not exist then APPSTART will create it.
	SMSLOG.TXT will help you determine why an application will not start, or why an
	application will not install using SMS. It can be viewed with a simple text
	editor.
	
	Example
	-------
	
	SMSLOG.TXT
	
	[12/06/94 16:21:23] Program Group Control ==> An Application specific error
	                                             occurred: SMSSETUP
	
	- msworks: MSAPPS server list is empty. SMS package has not been
	          successfully distributed.
	
	[12/06/94 16:21:31] Program Group Control Start ==> 'Microsoft Works' has
	                                                   not been successfully
	                                                   configured.
	
	[12/06/94 16:41:11] Program Group Control ==> An Application specific error
	                                             occurred: SMSSETUP
	
	- msworks: MSAPPS server list is empty. SMS package has not been
	          successfully distributed.
	
	[12/06/94 16:41:20] Program Group Control Start ==> 'Microsoft Works' has
	                                                   not been successfully
	                                                   configured.
	
	[12/14/94 14:50:29] Program Group Control ==> The application
	                                             msworks+msworks exists in the
	                                             database, but this user does
	                                             not have permission for it.
	
	Additional query words: sms PRODSMS
	
	======================================================================
	Keywords          : kbusage kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
