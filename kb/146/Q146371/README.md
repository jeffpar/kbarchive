---
layout: page
title: "Q146371: XCLN: Expired Passwords, Windows 3.x Client, and ShivaRemote"
permalink: /kb/146/Q146371/
---

## Q146371: XCLN: Expired Passwords, Windows 3.x Client, and ShivaRemote

{% raw %}

	Article: Q146371
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are working remotely with the Microsoft Exchange client for Windows 3.x
	and Windows for Workgroups 3.x, and initiate a remote dial-up connection to a
	Microsoft Exchange Server from within the client by opening the Tools menu and
	clicking Deliver Now..., the dial-up connection fails either silently, or after
	repeatedly presenting a Shiva credentials dialog prompting for your User Name
	and Password.
	
	CAUSE
	=====
	
	In the case of the silent failure, additional symptoms may include that the
	progress bar displays Connecting to Microsoft Exchange Server... and then the
	modem disconnects, yet the Inbox viewer appears. Verify that your Microsoft
	Exchange Server is operational and that your NT domain password has not
	expired.
	
	In the case of the credentials dialog box appearing and then re-appearing after
	filling it in and clicking OK, your NT domain password may have expired, or you
	may be otherwise failing domain credentials validation.
	
	Note that, "Tools, Deliver Now...", is not the most appropriate "transfer or
	connection engagement" mechanism when using the Microsoft Exchange Client
	remotely or in offline mode (see MORE INFORMATION, below).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	There are two issues to be considered here: informing you of conditions that
	require corrective action and providing a mechanism to take corrective action.
	
	Informing you:
	
	When using the Microsoft Exchange Client remotely and/or working offline, "Tools,
	Deliver Now..." is not the best option for initiating a connection to a
	Microsoft Exchange Server and transferring mail.
	
	"Tools, Deliver Now..." operates in a mode that minimizes dialog popup. It is the
	same mode used for scheduled connections. The assumption is that no one may be
	present to respond to error dialogs or conditions, and therefore, communication,
	authentication, or operational errors returned during these operations do not
	result in dialog popups.
	
	
	When working remotely or offline, the "Remote Mail, Tools, Connect" mechanism or
	"Tools, Synchronize, <option>" mechanism operates in a mode that assumes
	the user is present and thus returns communication, authentication, and
	operational errors to the user. These options are the recommended mechanisms for
	initiating a connection to a Microsoft Exchange Server and transferring mail
	when working remotely or offline.
	
	The problem documented in this article is that the error handling chain from
	ShivaRemote to the Microsoft Exchange Client was not returning the proper error
	message when using the "Remote Mail" or "Synchronize" mechanisms.
	
	The "expired domain password" condition can be confirmed by launching a Shiva
	Remote dial-up connection within Windows or Windows for Workgroups, outside of
	Microsoft Exchange. If the domain password has expired, you will receive the
	following dialog:
	
	  Your authentication attempt has failed; your password has expired.
	
	Alternatively, after applying the latest service pack, the following messages are
	returned when using the corresponding mechanisms:
	
	  Tools.Synchronize.This Folder - a Shiva credentials dialog will appear
	  prompting for "User Name" and "Password". Afterwards, the dialog:
	
	  This folder could not be synchronized. Your password has expired.
	
	  Tools.Remote Mail.Connect - a Shiva credentials dialog will popup prompting
	  for "User Name" and "Password". Afterwards, the dialog:
	
	  An error occurred during the connection: Your password has expired.
	
	Corrective actions:
	
	There is no mechanism in the Microsoft Exchange Client to allow you to change
	your NT domain password after it has expired. The client's password change
	mechanism assumes a connection to the Microsoft Exchange Server is available. In
	the case of remote dial-up, you must first have a valid network connection
	before you can access either your Microsoft Exchange Server or your Primary
	Domain Controller (PDC).
	
	The ShivaRemote software installed with the Microsoft Exchange Windows 3.x client
	does not support Windows NT Networking APIs for password changes.
	
	Workarounds:
	
	The best option for accommodating remote mail users is to use Windows 95 or
	Windows NT for dial-in clients because they natively support NT RAS dial-in and
	NT password change APIs. However, marginal workarounds exist for specific cases
	when using Windows for Workgroups or when dialing into a Shiva LanRover.
	
	  - If dialing into a Shiva LanRover:
	
	1. Start the Shiva connection outside of Microsoft Exchange and establish a
	  connection.
	
	2. In Control Panel, Network, Logon(\Off), log off and then Log on. This should
	  engage the mechanism for changing an expired Windows NT domain password.
	
	3. Start the Microsoft Exchange Client and provide the new domain credentials.
	  If your profile has disabled the Tools, Services, Microsoft Exchange Server,
	  Advanced, Use Network Security During Logon checkbox. You will still have to
	  synchronize all the passwords that Windows caches in the <username>.PWL
	  or elsewhere.
	
	  - If dialing into a Shiva LanRover from Windows 3.1 to a Novell network where
	  Windows NT PDCs and Microsoft Exchange Servers run FPNW & GSNW:
	
	1. Start the Shiva connection outside of Microsoft Exchange and establish a
	  connection.
	
	2. On the Windows 3.1 computer, run the Chngpass.exe utility included with FPNW.
	  This should change the Windows NT domain password and FPNW password.
	  Chngpass.exe requires an SPX connection to the PDC.
	
	3. Start the Microsoft Exchange Client and provide the new domain credentials if
	  your profile has disabled the Tools, Services, Microsoft Exchange Server,
	  Advanced, Use Network Security During Logon checkbox.
	
	  - On a Windows for Workgroups computer dialing into Windows NT RAS, it is
	  possible to also have Windows for Workgroups RAS installed, and you can
	  attempt a RAS connection. You will be informed that the domain password has
	  expired and the dialog to change it will be presented. Care must be taken
	  that Shiva's updates of NETBEUI.386 and NDIS2SUP.386 are not overwritten by
	  Windows for Workgroups RAS's earlier version. You will still have to
	  synchronize all the passwords that Windows caches in the <username>.PWL
	  or elsewhere.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
