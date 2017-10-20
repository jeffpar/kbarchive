---
layout: page
title: "Q140374: SMS: System Management Server Jobs Continue to Retry &amp; Not Fail"
permalink: /kb/140/Q140374/
---

## Q140374: SMS: System Management Server Jobs Continue to Retry &amp; Not Fail

{% raw %}

	Article: Q140374
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some Systems Management Server "Remove Package from Server" jobs, "Run command
	on Workstation" jobs and "Share Package on Server" Jobs may go into a state of
	retrying and not fail.
	
	CAUSE
	=====
	
	The SMS_Despooler attempts to process a job 100 times before changing the state
	of the job to "Failed". When a failure occurs, the job goes into a "Retrying"
	state.
	
	If the SMS_Despooler is stopped and restarted before the 100th retry of the job,
	the SMS_Despooler retry-count is re-initialized to zero and the despooler
	retries again 100 times. Therefore, if you start and stop the SMS_Despooler you
	may prolong the retry status of such jobs.
	
	MORE INFORMATION
	================
	
	To determine the number of pending retries (assuming SMS is installed in c:\sms
	and c:\temp exists):
	
	1. Copy Snirdr.exe and Hdecomp.exe from the Systems Management Server 1.2 CD
	  (Support\Debug\X86) folder to C:\Sms\Site.srv\X86.bin.
	
	2. From the C:\Sms\Site.src\X786.bin folder run the following commands:
	
	  Retries in an .sni:
	
	   - snirdr c:\sms\site.srv\despoolr.box\receive\xxxxxxxx.SNI
	     c:\temp\xxxxxxxx.txt
	
	   - type c:\temp\xxxxxxxx.txt
	
	  Retries in a .INS:
	
	   - hdecomp c:\sms\site.srv\despoolr.box\receive\xxxxxxxx.INS
	     c:\temp\xxxxxxxx.sni
	
	   - snirdr c:\temp\xxxxxxxx.sni c:\temp\xxxxxxxx.txt
	
	   - type c:\temp\xxxxxxxx.txt
	
	The output should start as below:
	
	  The execution time is M/D/Y 2-19-1970
	  The number of retries is N
	  ...
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. This problem has been corrected in the latest U.S. service
	pack for Systems Management Server version 1.2. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
