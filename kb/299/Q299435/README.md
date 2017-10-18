---
layout: page
title: "Q299435: Cannot Run SMS Service Manager After You Apply a Hotfix"
permalink: kb/299/Q299435/
---

## Q299435: Cannot Run SMS Service Manager After You Apply a Hotfix

	Article: Q299435
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbSecurity kbsmsProvider kbsmsUtil kbsms200preSP4fix
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Systems Management Server (SMS) Service Manager from a
	non-domain administrator account after you apply one or more of the hotfixes
	that is listed later in this section, you may receive the following error
	message:
	
	  Error communicating with the specified SMS Site Server.
	
	Post-SMS 2.0 Service Pack 3 (SP3) Hotfixes
	------------------------------------------
	
	  Q281754 Distribution Points Updated When Opening Package Properties
	
	  Q279234 Case-Sensitive Sort Order May Affect Security Rights
	
	  Q282494 Courier Sender Does Not Work When Sent to Grandchild Site
	
	  Q296784 SMS: Collid.lkp File Is Corrupted on Secondary Sites
	
	Post-SMS 2.0 Service Pack 2 (SP2) Hotfixes
	------------------------------------------
	
	
	  Q281754 Distribution Points Updated When Opening Package Properties
	
	  Q279234 Case-Sensitive Sort Order May Affect Security Rights
	
	  Q282494 Courier Sender Does Not Work When Sent to Grandchild Site
	
	  Q296784 SMS: Collid.lkp File Is Corrupted on Secondary Sites
	
	If you try to run the SMS Service Manager from an account that is a member of the
	domain administrator's group, you may also receive the error message that is
	listed earlier in this article.
	
	CAUSE
	=====
	
	Each of the hotfixes that are listed in the "Symptoms" section of this article
	change SMS security and inadvertently causes this problem.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next SMS service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix for SMS 2.0 SP3 must have the following file
	attributes or later:
	
	  Date           Time    Version    Size     File name   Platform
	  ---------------------------------------------------------------
	  March 1, 2001  10:30a  1493.3143   81,040  Cmprov.dll  Intel
	  March 1, 2001  10:30a  1493.3143  126,224  Cmprov.dll  Alpha
	
	The English version of this fix for SMS 2.0 SP2 must have the following file
	attributes or later:
	
	  Date           Time    Version    Size     File name   Platform
	  ---------------------------------------------------------------
	  June 10, 2000  03:00p  1493.2210   81,040  Cmprov.dll  Intel
	  June 10, 2000  03:00p  1493.2210  126,224  Cmprov.dll  Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the preceding files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you receive an error message when you run SMS Service Manager, you can follow
	these steps to verify this problem:
	
	1. Run WBEMTEST on your SMS Site Server, and then connect to root/default.
	
	2. Run the "'select * from SMSComponent'" (without the quotation marks) query.
	
	If you receive an "access denied" error message when you run this query, you may
	be experiencing the problem that is described in this article. Note that this
	problem can also be caused by using an account with out the correct rights.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbSecurity kbsmsProvider kbsmsUtil kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
