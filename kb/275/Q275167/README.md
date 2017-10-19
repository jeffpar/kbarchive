---
layout: page
title: "Q275167: PRB: IIS 5.0: Anonymous Access Fails After Joining Win2K Domain"
permalink: /kb/275/Q275167/
---

## Q275167: PRB: IIS 5.0: Anonymous Access Fails After Joining Win2K Domain

	Article: Q275167
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you join a stand-alone Windows 2000-based Internet Information Server
	(IIS) 5.0 server to a Windows 2000 Active Directory domain, anonymous access to
	the Web site fails and the following error message appears in the Web browser:
	
	  HTTP 401.1 - Unauthorized: Logon Failed
	
	NOTE: This problem occurs only if the user rights for the anonymous access
	accounts have been modified on the domain controller for the domain.
	
	CAUSE
	=====
	
	When you install IIS on a stand-alone Windows 2000-based member server, the
	member server receives updates from the domain and updates the local policy. As
	a result, the IUSR_<ComputerName> and IWAM_<ComputerName> anonymous
	access accounts are granted the following user rights:
	
	- Access this computer from the network
	- Log on locally
	- Log on as a batch job
	
	Windows 2000 uses the IUSR and the IWAM anonymous access accounts by default, and
	these accounts must have these user rights on the local computer.
	
	By default, the domain controller does not define a domain security policy for
	these user rights. If these user rights have been modified on the domain
	controller for the domain, the problem occurs as follows:
	
	- The stand-alone server joins the Windows 2000 Active Directory domain.
	
	- The domain policy is enforced on the member server after it joins the domain.
	
	- The domain policy overrides the local policy for these user rights on the
	  Windows 2000 member server.
	
	  By default, the domain policy is updated when you restart the member server
	  and at various intervals afterward.
	
	For additional information about the refresh interval, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q203607 How to Modify the Default Group Policy Refresh Interval
	
	RESOLUTION
	==========
	
	This section describes several methods to resolve this issue:
	
	- Restart IIS.
	- Do not define a domain security policy for certain user rights.
	- Create domain-based IUSR and IWAM accounts.
	
	Method One: Restart IIS
	-----------------------
	
	To work around this behavior, restart IIS.
	
	IIS attempts to confirm whether the IUSR and IWAM accounts have the necessary
	rights. If the necessary rights do not exist (because of a domain policy), IIS
	programmatically changes the local policy to allow the necessary user rights on
	the local IUSR and IWAM accounts.
	
	This workaround is a temporary solution. The next time that the Active Directory
	enforces the domain policy, Active Directory removes the rights, and you must
	restart IIS again to update the local policy.
	
	Method Two: Do Not Define a Domain Security Policy For Certain User Rights
	--------------------------------------------------------------------------
	
	To determine whether the user rights listed in the "Cause" section are defined as
	part of a domain security policy, follow these steps:
	
	1. At the domain controller for the domain on which the IIS servers are members,
	  on the Start menu, point to Programs, point to Administrative Tools, and then
	  click Domain Security Policy.
	
	2. Click Windows Settings, and then click Security Settings.
	
	3. Click Local Policies, and then click User Rights Assignments.
	
	4. To review the user rights, double-click "Access this computer from the
	  network" in the right pane of the Domain Security Policy snap-in. You can
	  review the user rights in the resultant dialog box.
	
	5. Repeat step 4 for the "Log on locally" and the "Log on as a batch job" user
	  rights.
	
	If you select the "Define these policy settings" check box for these rights, only
	the accounts that are specified in this dialog box can log on locally at any
	member server in this domain. When you select this check box, you override any
	local policy on each of the member servers for these user rights.
	
	To resolve this issue, do one of the following:
	
	- Clear this check box for each of the user rights that are listed in the
	  "Cause" section (which allows the member servers to use their own locally
	  defined policy).
	
	- or -
	
	- Add the local IIS anonymous access accounts (to the user rights that are
	  listed in the "Cause" section) in the Domain Security Policy snap-in on the
	  Active Directory domain controller for each Web server in the domain.
	
	This ensures that all member Web server accounts have the necessary rights when
	the default domain policy is pushed to all member Web servers.
	To add the local IIS anonymous access accounts on your Windows 2000 domain
	controller, follow these steps:
	
	1. At the domain controller for the domain on which the IIS servers are members,
	  on the Start menu, point to Programs, point to Administrative Tools, and then
	  click Domain Security Policy.
	
	2. Click Windows Settings, and then click Security Settings.
	
	3. Click Local Policies, and then click User Rights Assignments.
	
	4. To add the IUSR and IWAM anonymous access accounts to the "Access this
	  computer from the network" user right, follow these steps:
	
	  a. In the right pane of the Domain Security Policy snap-in, double-click
	     "Access this computer from the network".
	
	  b. In the resultant dialog box, click Add, and then click Browse.
	
	  c. In the lower pane, select the following phrase:
	
	<< Type names separated by semicolons...>>
	
	  d. Replace the selected phrase with the anonymous user account (IUSR or IWAM
	     as appropriate) in the format
	     <ComputerName>\IUSR_<ComputerName>.
	
	  e. Click OK, and then click OK again.
	
	5. Repeat steps 4A through 4e for the Log on locally and the Log on as a batch
	  job user rights.
	
	Finally, to refresh the user policy and the machine (computer) policy, follow
	these steps:
	
	1. At the IIS server, go to a command prompt, type the following command, and
	  then press ENTER:
	
	  secedit /refreshpolicy user_policy
	
	2. After the command completes, type the following command, and then press
	  ENTER:
	
	  secedit /refreshpolicy machine_policy
	
	3. Restart the IIS Admin Service.
	
	Method Three: Create Domain-based IUSR and IWAM Accounts
	--------------------------------------------------------
	
	Create domain-based IUSR and IWAM accounts that all of the IIS servers in the
	domain can use. This method is more efficient and manageable than adding
	multiple local IUSR and IWAM accounts to the domain policy.
	
	To create domain-based IUSR and IWAM accounts, follow these steps:
	
	1. Add the domain-based IUSR and IWAM accounts to the domain policy.
	
	2. Update all of the IIS member servers to use these domain-based accounts.
	
	If you use domain-based accounts for IUSR and IWAM, follow these steps for each
	of the Web servers in the domain:
	
	1. On the Start menu, click Run. In the Run dialog box, type "dcomcnfg.exe"
	  (without the quotation marks), and then click OK.
	
	2. On the Default Security tab, under Default Launch Permissions, click Edit
	  Default.
	
	3. Add the new domain-based IUSR and IWAM accounts with Allow Launch permission
	  (or Add the new domain-based IUSR and IWAM accounts,and then select Allow
	  Launch in the Type of Access list).
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about how to use the distributed version of the
	Component Object Model configuration file, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q176799 INFO: Using DCOM Config (Dcomcnfg.exe) on Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
