---
layout: page
title: "Q264945: SMS: Explanation of Error 38a in the Despooler Log File"
permalink: /kb/264/Q264945/
---

## Q264945: SMS: Explanation of Error 38a in the Despooler Log File

	Article: Q264945
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to troubleshoot slowdowns with the Despooler service in Systems
	Management Server (SMS) version 1.2, an error message that is usually present is
	Error 38a. This article explains the error message.
	
	MORE INFORMATION
	================
	
	The Error 38a error message does not represent a problem condition, it is
	actually an informational message to inform the administrator that a Request ID
	was not found in an instruction.
	
	This error message typically occurs when you cancel, delete, or expire a job. The
	error message means that you have reached the end of the file without finding a
	particular Request ID.
	
	For example, you have 9,000 clients in a single domain, 300 of which were sent a
	Microsoft Office package.
	
	When you cancel the Office job, a single cancel instruction is created for the
	domain. Despooler then builds a list of .ins files from the PCMDOM.BOX\Domain
	sub-folder. It then reads each .ins file, and determines if the Request ID you
	are canceling exists in the INS. If it does, it is removed. If not, an error
	message with a 906 (hexadecimal 38a) is generated, potentially causing an 8700
	error message. However, because Despooler was tasked by the single cancel
	instruction, only the first 38a error message is logged.
	
	The process must read through each instruction to determine if you can perform a
	cancel, expire or delete request; this means that the process can be very slow
	for large domains. The only time a perceived problem is apparent, is if a
	Request ID in an instruction is not found. At that point (starting when the
	error condition is written to the log), this process can take a long time to
	complete.
	
	If no error condition exists, the slowdown would still be a factor, but would not
	be apparent, as there wouldn't be an error message in the log.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
