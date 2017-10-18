---
layout: page
title: "Q281332: Interix Clients Heavily Use Samr Connections"
permalink: kb/281/Q281332/
---

## Q281332: Interix Clients Heavily Use Samr Connections

	Article: Q281332
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Server Manager or User Manager for Domains results in the following
	error message:
	
	  Insufficient system resources exist to complete the requested service. Do you
	  want to select another domain to administer?
	
	The primary domain controller (PDC) may have 2,048 \PIPE\samr connections.
	Rebooting the PDC temporarily alleviates the problem.
	
	
	This article deals specifically with causes related to running Microsoft Interix
	software in your environment.
	
	CAUSE
	=====
	
	When using the Interix software at the clients' Windows NT or 2000 domain,
	administrators may notice a high number of connections to the \Samr named PIPE.
	Looking at a Windows NT 4.0 domain controller, these connections show up with a
	blank username. When looking at a Windows 2000 domain controller, they show up
	with the username of the client's computer name with a dollar sign ($) at the
	end.
	
	If the number of connections exceeds the 2048 samr connection count limit on a
	given domain controller, that domain controller may return errors when
	performing samr operations.
	
	In a master domain environment, all of the client SAMR connections go to the PDC.
	For performance reasons the Interix client does not close all handles to the SAM
	(Security Account Manager) database on the domain controller. The Interix
	software makes heavy use us SID to name translation, which requires this
	connection.
	
	In addition, a bug exists where only in a master domain environment the domain
	controller contacted is the PDC. In a resource domain environment the client
	correctly picks any domain controller for the connection, which may or may not
	be the PDC.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Interix service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time    Version    Size     File name   Platform
	  -----------------------------------------------------------
	  03/05/2001 9:34PM  2.2.428.7  129,552  Posix.exe   Intel
	  03/05/2001 9:35PM  2.2.428.7   96,960  Psxdll.dll  Intel
	  03/05/2001 9:33PM  2.2.428.7   58,672  Psxrun.exe  Intel
	  03/05/2001 9:34PM  2.2.428.7  524,160  Psxss.exe   Intel
	
	
	To resolve this problem, follow two steps on the Interix client computers. First,
	install the Interix hotfix from this article. After you apply the fix, samr
	traffic is distributed to other domain controllers and not to the PDC. The fix
	also enables the DCSweepInterval registry key. This key specifies how often the
	client should close the samr connections with the server. To apply the fix:
	
	1. Install the Interix fix from this article.
	
	2. Use the following steps to add the DCSweepInterval key to the registry:
	
	  a. Click Start, click Run, type "regedit32" (without the quotation marks) in
	     the Open box, and then press ENTER.
	
	  b. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Softway Systems\Interix
	
	  c. Click Add Value on the Edit menu, and then add the following registry
	     value:
	
	  Value name: DCSweepInterval
	  Data type: REG_DWORD
	  Radix: Decimal
	  Value: Number of seconds for every "sweep" of the domain controller cache
	
	3. Quit Registry Editor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The reason that the connections show up as no user is because the Interix client
	makes the connection with the system context (NULL connection).
	
	For more information, please click on the following articles to view the articles
	in the Microsoft Knowledge Base:
	
	  Q189356 SAMR Pipes Cause Problems with Domain Controllers
	
	  Q286179 Server May Leak Samr Handles If an Error Path Is Hit in a Client
	  Function Call
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
