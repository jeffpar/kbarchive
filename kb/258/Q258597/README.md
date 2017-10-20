---
layout: page
title: "Q258597: Err Msg: Certificate Server is Unable to Process Request..."
permalink: /kb/258/Q258597/
---

## Q258597: Err Msg: Certificate Server is Unable to Process Request...

{% raw %}

	Article: Q258597
	Product(s): Internet Information Server
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to process a certificate request on a computer runnning Certificate
	Server, you may receive the following error message:
	
	  Certificate server is unable to process request. Status code = 57
	
	CAUSE
	=====
	
	The error message can occur if Certificate Server was installed on February
	29th, 2000 (Leap Year).
	
	RESOLUTION
	==========
	
	This problem has been corrected in Windows 2000.
	
	WORKAROUND
	==========
	
	Uninstall and reinstall Certificate Server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Certificate Server
	1.0.
	
	MORE INFORMATION
	================
	
	To find out if Certificate Server was installed on February 29th, 2000, check
	the following file:
	
	  C:\WINNT\System32\CertSrv\CertEnroll\<CertName>.crt
	
	Note: where <CertName> is <MachineName_AdminName>
	
	When you double-click the file, the Valid from date is February 29.
	
	
	Additional query words: CertSrv certificate
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
