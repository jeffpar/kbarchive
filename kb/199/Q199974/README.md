---
layout: page
title: "Q199974: SMS: Event to Trap Translator Error-Can't Load Message File"
permalink: kb/199/Q199974/
---

## Q199974: SMS: Event to Trap Translator Error-Can't Load Message File

	Article: Q199974
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbSNMP kbsms100 smssnmp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 1.2, administrators have the ability to configure
	Windows NT events to be redirected as SNMP traps to SNMP-aware management
	consoles such as with Systems Management Server.
	
	When launching Event to Trap Translator under Personal Computer Properties, you
	may receive the following error message:
	
	  Can't load message file: \\SERVER\C$\%path%
	
	Followed by:
	
	  The current trap configuration contains at least one event description that
	  is not valid. The corresponding event(s) will not be loaded.
	
	CAUSE
	=====
	
	The event identifier message file contains spaces in its path.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following Web
	site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	Size      File name       Platform
	-----------------------------------------------------------
	260,080   Eventrap.exe    (x86)
	622,352   Eventrap.exe    (Alpha)
	
	
	WORKAROUND
	==========
	
	To work around this issue, replace the Long File Name in the registry with the
	short file name. For example put c:\progra~1\phoneb~1\bin\pbsvrmsg.dll in the
	registry key:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\Eventlog\<log>\<name>\CategoryMessageFile
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The EventMessageFile value(REG_EXPAND_SZ) is located under
	\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\%LOG%\%SERVICE%\
	and used as a placeholder for Event Identifier message files to provide
	descriptions to Event Viewer.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSNMP kbsms100 smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
