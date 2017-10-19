---
layout: page
title: "Q272023: MMS 2.2 Release Notes: Known Issues Section"
permalink: /kb/272/Q272023/
---

## Q272023: MMS 2.2 Release Notes: Known Issues Section

	Article: Q272023
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbreadme
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the "Known Issues" section from the Microsoft
	Metadirectory Services (MMS) 2.2 Release Notes.
	
	MORE INFORMATION
	================
	
	Known Issues
	------------
	
	1. Installer Incorrectly Reports Free Space if Greater than 4 GB
	
	When you install or upgrade to MMS version 2.2, MMS incorrectly reports free
	space if a disk is greater than 4 gigabytes (GB). Ignore the value that is
	reported, but ensure that you have sufficient disk space to install the product.
	We recommend-at a minimum-500 MB of available disk space.
	
	2. Lotus Notes Client Supported
	
	At the present time, Lotus Notes 4.x and 5.01 clients are supported by MMS
	version 2.2. Lotus Notes 5.02 and 5.03 clients are incompatible. Install the
	5.01 or earlier clients on your MMS Server.
	
	3. Active Directory Management Agent Limitations
	
	The Active Directory management agent has certain limitations. Specifically, the
	Active Directory management agent does not support the following operations:
	
	   - Schema synchronization between Active Directory forests.
	
	   - Creation of security groups in Active Directory or synchronization of
	     security groups between forests. The Active Directory management agent
	     creates security and distribution groups in one forest as universal
	     distribution groups in other forests.
	
	   - Synchronization of Windows built-in groups.
	
	   - Active Directory namespace reshaping such as occurs with domain
	     migrations.
	
	   - Renaming of an entry in the connector space or in Active Directory when
	     the metaverse entry is changed.
	
	   - Moving or renaming of users, contacts, organizational units, and groups
	     within Active Directory.
	
	   - Distributed management of distribution groups in different forests such
	     that members of a group can be created in any forest.
	
	   - Centralized policy management.
	
	   - Microsoft Exchange version 5.5 to Exchange 2000 interforest migrations.
	
	   - Password synchronization.
	
	   - Cryptographic credential management, such as with e-commerce applications
	     that need to publish and synchronize certificates and related credentials
	     and attributes between forests to external systems and directories. Some
	     certificate information (specifically, userCertificate and
	     userSMIMECertificate attributes) can be synchronized. Certificate
	     revocation lists and other cryptographic attributes are not synchronized
	     however.
	
	   - Management of Windows 2000 system objects. The management of Windows 2000
	     computer, printer, and shared folder objects in domains of a forest, and
	     the management of system containers (for example, users, system, foreign
	     security principals, lost and found, computers, built-in groups, and
	     certification authorities) is not supported.
	
	   - Synchronization of security principals that contain /\() in their name
	     will fail. Template modification will be required to work around this
	     limitation.
	
	Erratta The Active Directory Management Agent Administration Manual suggests that
	encryption is available using the Active Directory management agent. Kerberos
	sign and seal has been disabled for this release, however, credentials remain
	protected. Passwords are safely exchanged with Active Directory, but the session
	is not encrypted (as suggested in the Active Directory Management Agent
	Administration Manual).
	
	4. Together Administration Management Agent Limitations
	
	   - TAMA does not propagate metaverse renames to connected directories. As a
	     result, you need to manually rename accounts in Active Directory instead
	     of expecting TAMA and the Active Directory to propagate renames.
	
	   - In MMS version 2.2, TAMA always counts levels from the metaverse boundary
	     node. The metaverse boundary node defines how much of the metaverse tree
	     structure you might want to reproduce in the connector space. Everything
	     below this node is eligible. While you can restrict the number of eligible
	     parent entries that are actually reproduced, it is not recommended that
	     you do this. Specifically, you should always click All Parents in Maximum
	     Number of Levels.
	
	   - 19086 : DS_RC_PARENT_NOT_EXIST Error. When you use TAMA, you might get
	     this and parents are missing in connector space. To correct this error,
	     reconfigure your TAMA resource and select a metaverse boundary node that
	     prunes undesired top-level parent objects.
	
	5. Active Directory Management Agent Requires Reconfiguration to perform
	  Microsoft Exchange 2000 Interorganization Synchronization in Conjunction with
	  the Exchange X.400 Connector
	
	By default, the Active Directory management agent sets the target address of
	contacts in the following order:
	
	   - Use the targetAddress attribute of the metaverse (that is, if it exists).
	
	   - Use the metaverse (SMTP) mail attribute (that is, if it exists) and set
	     the target address attribute for the contact in Active Directory using the
	     following:
	
	SMTP:$mv.mail
	
	   - Use the metaverse (X.400) textEncodedOrAddress attribute (that is, if it
	     exists) and set the target address attribute for the contact in Active
	     Directory using the following:
	
	X.400:$mv.textEncodedOrAddress
	
	This causes a problem when you address mail to a contact when the Exchange X.400
	connector is being used. If a contact has a proxy address that is of the same
	type as the native address type for a particular gateway, Exchange swaps the
	address of the mail with the native address type for that gateway before sending
	it over. (An exception occurs when a user or contact does not have a proxy
	address that fits the gateway. In that case Exchange encapsulates the
	recipient's current address inside the address type defined for a gateway.)
	However, when trying to send mail over an X.400 gateway, Exchange uses the X.400
	proxy address defined on the SMTP contact (even if their target address is SMTP)
	because Exchange transports are only capable of sending mail using their native
	address conventions. To correct this problem, do the following:
	
	      - If you only use X.400 to interconnect your Exchange organizations or to
	        communicate with third party X.400 messaging systems, set the target
	        address with X.400:$mv.textEncodedOrAddress and disable the setting of
	        the mail attribute as the target address. You can do this by editing
	        the following management agent templates: CD Accounts from Connectors
	        (that is, crt.st) and Secondary Attribute Flow (that is, secndflow.st).
	        To do this, comment out the lines identified by #! to not set a SMTP
	        target address on contacts. For example:
	
	if $exists ("$mv.targetAddress") = TRUE 
		   then    
		      $cd.targetAddress = $mv.targetAddress
		   else      
		      #! if $exists ("$mv.mail") = TRUE     
		      #! then
		      #!   $cd.targetAddress = (SMTP:$mv.mail)
		      #! else
		         if $exists ("$mv.textEncodedOrAddress") = TRUE
		         then
		            $cd.targetAddress = (X.400:$mv.textEncodedOrAddress)
		         endif
		      #! endif
		   endif
	
	      - If you plan to use a combination of SMTP and X.400 connectors to
	        interconnect your Exchange organizations or to communicate with third
	        party X.400 or SMTP messaging systems, do one of the following:
	
	     1. Only set one of the mail (SMTP) or textEncodedOrAddress (X.400) in your
	        source management agent; you may have to customize the default
	        attribute flow of source Active Directory management agents to do this.
	        If this is performed, the Active Directory management agent constructs
	        the proper attribute for you automatically.
	
	     2. Write a custom attribute flow script that sets the targetAddress
	        attribute of metaverse object based on the system that originated the
	        object.
	
	Remember to use one of the following prefix with targetAddress:
	
	      - SMTP:-for SMTP recipients
	
	      - X.400:-for X.400 recipients
	
	      - NOTES:-for Lotus Notes recipients
	
	You do not have to modify the Active Directory management agent CD Accounts from
	Connectors (that is, crt.st) and Secondary Attribute Flow (that is,
	secndflow.st) templates. These templates appear as follows:
	
	if $exists ("$mv.targetAddress") = TRUE  
	  then      
	     $cd.targetAddress = $mv.targetAddress
	  else      
	     if $exists ("$mv.mail") = TRUE      
	     then
	       $cd.targetAddress = (SMTP:$mv.mail)
	     else
	        if $exists ("$mv.textEncodedOrAddress") = TRUE
	        then
	           $cd.targetAddress = (X.400:$mv.textEncodedOrAddress)
	        endif
	     endif
	  endif
	
	For more information please consult Microsoft Exchange 2000 documentation.
	
	6. Miscellaneous Microsoft Exchange 2000 Issues
	
	   - Groups with attribute msExchHideFromAddressLists = True will not
	     synchronize.
	
	   - Changing group membership from Hidden to Unhidden when the target object
	     already exists generates an error. To allow the group to be created, you
	     need to delete the contact that represents the hidden group from all other
	     forests before MMS can create the group and its membership.
	
	   - Groups with Hidden membership (that is, nested local groups) synchronize
	     as contacts to the target forest. If this contact is added to a group in
	     the target forest this membership will not synchronize back to the source
	     forest because local groups cannot be a member of other groups. An
	     Unwilling to perform update error appears in Active Directory when you try
	     to do this.
	
	7. MMS Server Installer Does Not Modify the MMS Active Compass HTML Definition
	  Page
	
	The MMS Server installer does not automatically update the MMS Active Compass
	HTML definition page on installation if you select an LDAP port that is
	different than 389. The same holds true if you change the port number on which
	you connect to MMS Server. To set the correct port, edit the
	\zoomserv\data\http\activec.htm file on MMS Server and modify the DMServerPort
	parameter with the appropriate port number by replacing the default value of
	389.
	
	8. Enabling SSL to Set Passwords Using the Active Directory Management Agent
	
	To set passwords in MMS version 2.2, Secure Socket Layer (SSL) must be enabled.
	
	To enable SSL:
	
	  1. Install the Windows 2000 High Encryption Pack (that is, Encpack.exe) on
	     the MMS Server that hosts the Active Directory management agent and on any
	     Windows 2000 domain controllers with which the Active Directory management
	     agent communicates. Encpack.exe installs 128-bit encryption software. For
	     more information about where you can get obtain the Windows 2000 High
	     Encryption Pack, see
	
	  http://www.microsoft.com/WINDOWS2000/downloads/recommended/encryption/default.asp
	
	  2. Configure one of the Windows 2000 domain controllers that has 128-bit
	     encryption software installed as the enterprise certification authority.
	     All MMS clients and servers must obtain their certificates from this
	     computer. For information on how to configure a computer as the enterprise
	     certification authority, see Windows 2000 Help.
	
	  3. Create a server certificate on each applicable Windows 2000 domain
	     controller. Use the Microsoft Management Console (MMC) Certificates
	     snap-in to create a certificate (for information about how to create
	     server certificates, see Windows 2000 Help). In the Certificate Request
	     wizard, type the full Domain Name System (DNS) name of the domain
	     controller for the certificate name. You must also type the e-mail name.
	     In Intended Purpose, enter Server Authentication Certificate. In Key
	     Options, under CSP, enter Microsoft RSA Schannel Cryptographic Provider.
	     Select the Use local Machine store check box. For all other fields, accept
	     the defaults.
	
	  4. Install the certification authority (CA) certificate on each MMS Server
	     that communicates with Windows 2000 domain controllers and has server
	     certificates installed. For information about how to install CA
	     certificates, see Windows 2000 Help.
	
	Note: By default, the CA certificate is not installed in the Trusted Root
	Certificates container for the local computer, but it needs to be on the local
	computer. If it is not, the MMS Server cannot be able to obtain access to it
	when it runs as a server. Make sure you install the CA certificate in this
	container.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbreadme 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbinfo
	
	=============================================================================
	
