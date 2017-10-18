---
layout: page
title: "Q241982: SMS: Subst Command Locks Out SMSCliToknAcct&amp; and SMSCCMBootAcct&amp;"
permalink: kb/241/Q241982/
---

## Q241982: SMS: Subst Command Locks Out SMSCliToknAcct&amp; and SMSCCMBootAcct&amp;

	Article: Q241982
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbSecurity kbsms200 kbsms200bug kbInventory kbOSNovell
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "subst" command to assign a drive letter to a third-tier
	directory on a Microsoft Windows NT computer (see "Example" in this section of
	the article), the local Systems Management Server accounts SMSCliToknAcct&
	and SMSCCMBootAcct& do not correctly attempt connection over the network,
	which can cause a lockout of the account.
	
	Example:
	
	  g=\\<server>\<share>, subst h=g:\<directory>
	
	CAUSE
	=====
	
	During a Windows NT Remote client installation, the client uses the
	SMSCCMBootAcct& account. During software or hardware inventory, the client
	uses the SMSCliToknAcct& account. These accounts only exist for the local
	use of the clients. Because the domain controllers share an accounts database,
	the domain controllers also share these accounts. If either of these accounts is
	used on the network, the accounts will be recognized, but the passwords will be
	incorrect. This causes the lockout of the account in the domain.
	
	Some organizations may use the subst command in logon scripts to have the
	equivalent of a Novell MapRoot command, such as:
	
	  net use g:\\<server>\<share>
	  subst h: g:\<username>
	
	The lockouts do not occur if you do not use the "subst" command.
	
	RESOLUTION
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server that contains
	this fix.
	
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
	
	The English Service Pack 3 (SP3) version of this fix should have the following
	file attributes or later:
	
	  Date         Time   Version        Size     File Name        Platform
	  ---------------------------------------------------------------------
	  01-Mar-2001  16:50                      67  Compversinv.ini
	  01-Mar-2001  16:50  2.0.92.1       511,796  Insinv32.exe     
	  01-Mar-2001  16:50  2.0.1493.3159  151,824  Sinv32.exe       Alpha
	  01-Mar-2001  16:50                      67  Compversinv.ini
	  01-Mar-2001  16:50  2.0.92.1       280,645  Insinv32.exe     
	  01-Mar-2001  16:50  2.0.1493.3159  104,816  Sinv32.exe       X86
	
	
	
	WORKAROUND
	==========
	
	Do not use the "subst" command.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	NOTE: As of SMS 2.0 Service Pack 4 (SP4), the software inventory agent no longer
	causes incorrect account usage due to substituted drives. However, the remaining
	issues with client installation and hardware inventory may still occur.
	
	Additional query words: prodsms subst
	
	======================================================================
	Keywords          : kbnetwork kbClient kbSecurity kbsms200 kbsms200bug kbInventory kbOSNovell 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
