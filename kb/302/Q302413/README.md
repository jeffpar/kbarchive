---
layout: page
title: "Q302413: SMS: No Users or Groups Listed in Administrator User Wizard"
permalink: /kb/302/Q302413/
---

## Q302413: SMS: No Users or Groups Listed in Administrator User Wizard

{% raw %}

	Article: Q302413
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server Administrator User Wizard to browse
	for users and groups, no users or groups are listed.
	
	CAUSE
	=====
	
	This behavior occurs because an anonymous context is used to request user and
	group information from the domain, but domain security denies anonymous
	permissions for user and group information.
	
	WORKAROUND
	==========
	
	To work around this issue, turn on anonymous connections. To do this, follow the
	appropriate set of steps with regard to the domains in question.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- For Microsoft Windows NT domains, follow these steps on all domain
	  controllers:
	
	  a. Run Registry Editor (Regedt32.exe).
	
	  b. Navigate to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
	
	  c. Select the RestrictAnonymous value.
	
	  d. On the Edit menu, click Delete.
	
	  e. Quit the Registry Editor, and then restart the computer.
	
	- For Windows 2000 domains, follow these steps:
	
	  a. On a domain controller, add the Everyone group to the Pre-Windows 2000
	     Compatible Access group. This must be done from the following command
	     line:
	
	  net localgroup "Pre-Windows 2000 Compatible Access" everyone /add
	
	  b. Ensure that the Default Domain Policy under
	     Computer|Configuration|WindowsSettings|Local Policies|Security
	     Options|"Additional restrictions for anonymous connections" is set to one
	     of the following:
	
	      - Not defined
	
	      - None. Rely on default permissions
	
	      - Do not allow enumeration of SAM accounts and shares
	
	NOTE: You may have custom policies enforcing the anonymous setting. If so, you
	need to modify the respective group policy.
	
	  c. Ensure that the Pre-Windows 2000 Compatible Access group has permissions
	     by resetting permissions using Dsacls.exe from the support directory on
	     the Windows 2000 CD-ROM:
	
	  dsacls DC=MICROSOFT,DC=COM /I:T /G "BUILTIN\Pre-Windows 2000 Compatible
	  Access":LC
	
	  dsacls cn=server,cn=system,dc=MICROSOFT,dc=com /G "BUILTIN\Pre-Windows 2000
	  Compatible Access":RP
	
	NOTE: The preceding example uses MICROSOFT as the domain name; please change this
	name to reflect the correct domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information about the RestrictAnonymous setting, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
