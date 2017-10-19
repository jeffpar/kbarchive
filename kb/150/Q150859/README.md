---
layout: page
title: "Q150859: Using SMSLS.INI to Map Domains Fails on SMS1.1J"
permalink: /kb/150/Q150859/
---

## Q150859: Using SMSLS.INI to Map Domains Fails on SMS1.1J

	Article: Q150859
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the SMS 1.1 Japanese environment, it is not possible to map Windows NT
	clients to <new domain> from <current domain> using the Smsls.ini
	file.
	
	Running Smsls.bat in verbose mode will show:
	
	       Find the Server from the INI file
	     get def INI Name using path from arg[0]
	     inifile(\\<servername>\NETLOGONsmsls.ini)
	     SMS.INI sez () () () () ()
	     current sez (\\<servername>\NETLOGONsmsls.ini)
	     Check (\\<servername>\NETLOGONsmsls.ini) for domain
	     Error:-1 Opening (\\<servername>\NETLOGONsmsls.ini)
	
	NOTE: This problem occurs only with the Japanese version of SMS1.1(x86, Alpha,
	Mips).
	
	CAUSE
	=====
	
	A backslash (\) is missing between NETLOGON and smsls.ini.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Japanese version of Systems
	Management Server version 1.1. A fix to this problem is in development, but has
	not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Product Support Services for more
	information on the availability of this fix.
	
	Additional query words: prodsms smsls
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
