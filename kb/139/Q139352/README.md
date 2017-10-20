---
layout: page
title: "Q139352: PC Gen: FAQ - Implementing Electronic Mail under Windows 95"
permalink: /kb/139/Q139352/
---

## Q139352: PC Gen: FAQ - Implementing Electronic Mail under Windows 95

{% raw %}

	Article: Q139352
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,1.0a,3.x,4.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.x 
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Schedule+ for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a list of frequently asked questions and the answers about implementing
	mail and scheduling products using the Microsoft Windows 95 operating system.
	
	1. Q. Will the Microsoft Exchange Windows 95 client transfer mail with a version
	  3.x Microsoft Mail for PC Networks postoffice?
	
	  A. Yes. The Microsoft Exchange Windows 95 client can install the Microsoft
	  Mail service provider. When this provider is installed, the Microsoft
	  Exchange client can access either a Microsoft Windows for Workgroups
	  postoffice (WGPO) or a version 3.x of Microsoft Mail for PC Networks
	  postoffice.
	
	2. Q. Does the Microsoft Exchange Windows 95 client handle remote mail
	  transfer?
	
	  A. Yes. The Microsoft Exchange Windows 95 client using the Microsoft Mail
	  service provider supports remote mail functionality, including remote header
	  preview, selective message downloading, scheduled mail transfers, local
	  address list download/update, and options for maximizing remote session
	  performance. However, Microsoft Exchange Windows 95 client uses a different
	  method of connecting to the postoffice than the proprietary mechanism used by
	  Microsoft Mail Remote for Windows.
	
	  Microsoft Exchange connects, logs into, and gets validated on a local area
	  network (LAN) using a Dialup Networking connection to a Microsoft Windows NT
	  or Microsoft Windows 95 Remote Access Service server, a Shiva LanRover, or
	  Novell NetWare Connect remote networking software. The Microsoft Exchange
	  Windows 95 client cannot dial into the version 3.x of the External Mail
	  program (EXTERNAL.EXE) to transfer mail with a postoffice.
	
	3. Q. Does the Microsoft Exchange Windows 95 client handle remote mail transfer
	  to postoffices on Novell servers?
	
	  A. Yes. Assuming the following:
	
	   - A valid remote networking session with the LAN can be established (using
	     one of the connection options mentioned above).
	
	   - The remote Windows 95 workstation is configured to use the Microsoft
	     Client for NetWare Networks.
	
	   - The Microsoft IPX/SPX compatible protocol is bound to the Dial-Up Adapter.
	
	   - The Novell Network performs bindery-based security authentication.
	
	4. Q. What should be considered prior to upgrading an existing Microsoft Mail
	  for PC Networks clients to the Microsoft Exchange Windows 95 client?
	
	  A. Prior to installing the Microsoft Exchange Windows 95 client, the following
	  should be considered:
	
	   - Postoffice (PO) pathing. If you access the postoffice via a drive letter,
	     ensure that the drive letter is mapped correctly, and that the PO is
	     accessible within Windows 95 prior to installing the Microsoft Exchange
	     client. When the Microsoft Exchange Setup Wizard prompts you for the path
	     to the PO, specify the correct drive letter and path.
	
	     Because Windows 95 supports universal naming convention (UNC) pathing to
	     network resources, UNC is the preferred method. This is now supported to
	     NetWare resources when you use the 32- bit, protect-mode Microsoft Client
	     for NetWare Networks redirector.
	
	     The following are examples of UNC syntax to a NetWare resource:
	
	  \\<servername>\<volumename>\<path>
	
	  \\NW5_HQ\SYS\MAILDATA
	
	     UNC pathing will not work for NetWare resources if NETX or VLM is the
	     installed redirector for NetWare networks.
	
	   - Postoffice account exists. You should already have a valid account on the
	     PO. After you specify the path to the PO, the Setup Wizard will present a
	     list of user accounts from the PO (assuming the PO is accessible at that
	     time). You will need to select your account from the list and supply the
	     correct password.
	
	   - If a list is not presented, this indicates that the PO was not accessible
	     at the time. You can continue configuring Microsoft Exchange by entering
	     the information manually, or cancel the configuration Wizard and retry at
	     a later time.
	
	   - Location of the PST and PAB. The Microsoft Exchange client's equivalent to
	     the mail message file (MMF) is a <filename>.PST file [Personal
	     Folders]. The MMF contained the Personal Address Book (PAB). Microsoft
	     Exchange now stores this list in a separate file, <filename>.PAB
	     [Personal Address Book]. The Setup Wizard creates these files wherever the
	     user specifies. Generally, it is recommended that the PAB and PST be
	     stored on the local workstation. Optionally the PST could be stored under
	     the PO database's \MMF subdirectory, or other network share.
	
	     NOTE: The Microsoft Exchange client user interface (UI) does not provide
	     the functionality to move the PST file.
	
	   - MMF location for conversion. Microsoft Exchange Setup Wizard looks in the
	     MSMAIL.INI [Microsoft Mail] section for the entry
	     OfflineMessages=<path>\<filename>.MMF. If the Setup program
	     finds this entry, and the MMF file exists, the Wizard will present a page
	     for converting the contents of the MMF into the PST and PAB files
	     previously specified. If the MMF is stored on the PO database, this INI
	     entry will not exist, and the Wizard will not present the converter page.
	
	     NOTE: The migration process does not alter the MMF, it only reads
	     information from it. Also, any MMF can be migrated at a later time by
	     choosing Import from the File menu. The password of the MMF is required
	     for migration.
	
	   - Strategies for migrating MMFs. Ideally the MMF is moved local prior to
	     installing the Exchange client. The integrity of the MMF is verified by
	     running the CHECKMMF process.
	
	  Notes:
	
	   - The local hard drive should have 3 times the file size of the MMF
	     available.
	
	   - The migration utility can process a file across the network, but local is
	     faster and exposure to network problems are minimized.
	
	   - It is not recommended that the Mail user leave his or her MMF in the \MMF
	     subdirectory on the PO server, because the file name is an 8 digit
	     <hex-number>.MMF. To determine an user's hex-id on the PO requires
	     special techniques or utilities. This will quickly prove time consuming
	     and inefficient when you upgrade users to the Microsoft Exchange client.
	
	   - Shared folders. The Microsoft Mail service provider that ships with
	     Windows 95 does not support accessing Shared Folders on a version 3.x
	     Microsoft Mail for PC Networks postoffice or a Microsoft Windows for
	     Workgroups postoffice (WGPO). An updated Microsoft Mail service provider
	     (EXUPDUSA.EXE) supporting Shared Folders is available for download.
	
	     Large installations that use Shared Folders will want to apply this update
	     to the distribution share point prior to the rollout of Exchange client.
	
	   - Spell checking. Windows 95 Exchange client requires access to a Win32
	     application's spell checker. It does not install its own spell checker.
	     Microsoft Office 95 and Microsoft Office for Windows NT include a Win32
	     spell checker. Other third party Win95 applications will likely include
	     options for installing a spell checker into Windows 95.
	
	   - Schedule+ version. Please review the questions regarding Schedule+ later
	     in this document.
	
	   - Microsoft Mail Advanced Security. The Exchange client does not engage
	     Advanced Security (reading an encrypted UNC path embedded in a MAIL.DAT
	     file at launch). You are required to specify the path to the PO in the
	     Profile Setup Wizard during Microsoft Exchange installation.
	
	5. Q. Can the existing version 3.x Microsoft Mail for PC Networks client
	  software continue to run under Windows 95?
	
	  A. Yes. The current Microsoft Mail clients, such as Microsoft Mail and
	  Microsoft Mail Remote, are fully supported running under Windows 95. However,
	  the Microsoft Exchange Windows 95 client offers a more feature rich, unified
	  user interface that is capable of connecting to a variety of additional
	  services.
	
	6. Q. When you upgrade an existing Windows 3.x or Windows for Workgroups (WFW)
	  3.x workstations to Windows 95, are there any special considerations for
	  maintaining existing version 3.x Microsoft Mail for PC Networks mail
	  configurations?
	
	  A. With the exception of the loss of WFW At Work Fax capabilities, no. This
	  assumes that no Microsoft Exchange components are selected for installation
	  during setup. The network administrators should consider how the path to the
	  postoffice is currently established (login script drive mapping, batch file
	  mapping, persistent connection, etc.), and confirm that the current method is
	  valid under Windows 95 networking. Otherwise, the version 3.x of Microsoft
	  Mail for PC Networks client may report that it cannot find the postoffice
	  when you run it.
	
	  If any Exchange component is installed, then these component(s) may need to be
	  removed by using the Control Panel, Add/Remove Programs, Windows Setup. The
	  previous Microsoft Mail for PC Networks client software may also require
	  reinstallation.
	
	  For information on options for "scripting" and controlling Windows 95
	  installation options, refer to the "Deployment Planning Guide Installation"
	  and "Appendix - MSBATCH.INF parameters" sections of the Windows 95 Resource
	  Kit help file. This help file can be found on the Windows 95 CD at
	  \ADMIN\RESKIT\HELPFILE\WIN95RK.HLP.
	
	7. Q. What components are common to version 3.x of Microsoft Mail for PC
	  Networks clients and the Microsoft Exchange Windows 95 client?
	
	  A. Two files have the same file names between Microsoft Mail for PC Networks
	  clients and Microsoft Exchange Windows 95 client: MSMAIL.INI and MAPI.DLL.
	  When the Microsoft Exchange client components are installed, the Setup
	  program installs the Microsoft Exchange MAPI.DLL into the
	  <windir>\SYSTEM subdirectory, overwriting any existing MAPI.DLL.
	
	  Additionally, Setup may migrate certain MSMAIL.INI entries into the registry,
	  MSMAIL32.INI or EXCHNG32.INI files. Setup should leave the MSMAIL.INI intact
	  for backwards compatibility with 16-bit, mail-aware (for example, messaging
	  application programming interface (MAPI)) Windows applications.
	
	8. Q. Can the Microsoft Exchange Windows 95 client, Microsoft Mail 3.2, and/or
	  Microsoft Mail Remote for Windows be used at the same time?
	
	  A. This configuration is not supported. Either the version 3.x Microsoft Mail
	  for PC Networks set of clients or the Microsoft Exchange Windows 95 client
	  can be functional under Windows 95, but not both.
	
	  If you do run both, it could result in file contention issues, possible
	  database corruption on the postoffice, and other complications for remote
	  mail users and mail aware applications.
	
	9. Q. Will version 1.0 of Microsoft Schedule+ for Windows function if the
	  Microsoft Exchange Windows 95 client is installed?
	
	  A. You can still use Schedule+ 1.0 if you have migrated to the Microsoft
	  Exchange client, but the functionality will be diminished. You will be able
	  to use Schedule+ in standalone (off-line) mode, but you will not have the
	  ability to send or receive meeting requests.
	
	  For more information, see the Windows 95 EXCHANGE.TXT file.
	
	10. Q. Will Schedule+ 1.0 continue to function normally if the 3.x Microsoft
	  Mail components remain the installed mail components in Windows 95?
	
	  A. Yes.
	
	11. Q. Does version 7.0 of Microsoft Schedule+ for Windows 95 require Windows 95
	  Exchange components?
	
	  A. Yes. Schedule+ 7.0 relies on an enhanced messaging API set known as
	  Extended MAPI. Only Microsoft Exchange components provide this API set.
	  Version 3.x of Microsoft Mail for PC Networks supports only simple MAPI.
	
	12. Q. Can Schedule+ 1.0 and Schedule+ 7.0 users share the same Windows for
	  Workgroups postoffice (WGPO) or version 3.x Microsoft Mail for PC Networks
	  version postoffice?
	
	  A. Yes.
	
	  Notes:
	
	   - See the Microsoft Office 95 \Schedule\SCREADME.TXT file.
	
	   - Schedule+ 7.0 requires the Microsoft Exchange Windows client to send and
	     receive meeting requests.
	
	   - Schedule+ 7.0 is backwards compatible with Schedule+ 1.0 except that 7.0
	     users cannot write to Schedule+ 1.0 data files, and Schedule+ 1.0 users
	     cannot read Schedule+ 7.0 data files. The free and busy information can
	     still be viewed.
	
	   - Manager/delegate pairs must use the same version of Schedule+ (for
	     example, both must use either Schedule+ 1.0 or Schedule+ 7.0).
	
	   - Existing Schedule+ administrative utilities in ADMINSCH.EXE are supported,
	     with the exception of the Administration/Clean Up Schedule Files command.
	     This command should not be run on a Microsoft Mail 3.x postoffice with
	     Schedule+ 7.0 users.
	
	13. Q. How will resource accounts function in a mixed Schedule+ environment?
	
	  A. If resource accounts are upgraded to 7.0, Schedule+ 1.0 users will only be
	  able to view free/busy information through the Planner. If the resources are
	  upgraded to 7.0, upgrade the resource Assistant also.
	
	  If resource accounts remain in 1.0 format, both Schedule+ 1.0 and 7.0 users
	  will be able to see the details of the resource (although 7.0 users only
	  have read access.)
	
	14. Q. Will Microsoft Electronic Forms Designer forms (E-forms) and 16-bit MAPI
	  applications continue to work when the Microsoft Exchange Windows 95 client
	  is installed?
	
	  A. Yes. E-forms or messaging applications that adhere to simple MAPI
	  specifications should continue to function under Windows 95 regardless of
	  whether the system continues to use version 3.x Microsoft Mail for PC
	  Networks or is upgraded to the Microsoft Exchange client/Microsoft Mail
	  service provider. MAPI.DLL included with Microsoft Exchange supports simple
	  MAPI.
	
	15. Q. Will third party add-on products for version 3.x of Microsoft Mail for PC
	  Networks continue to function when the Microsoft Exchange Windows 95 client
	  is installed?
	
	  A. Products that adhere to the simple MAPI specification should continue to
	  function. Other products that exploit or rely on other version 3.x Microsoft
	  Mail for PC Networks specific function calls may not function correctly
	  under Windows 95 and may interfere with the Microsoft Exchange client's
	  functionality.
	
	  For additional information, refer to the "Troubleshooting Tips" section of
	  EXCHANGE.TXT in the Windows subdirectory of Windows 95 or contact the
	  manufacturer of the product.
	
	16. Q. Can a single PST and PAB file be shared between multiple Microsoft
	  Exchange Windows 95 client profiles?
	
	  A. Yes. These files can be shared between a user's multiple profiles, or
	  separate files specified for each profile. A Microsoft Exchange client can
	  mount multiple PST files from within a profile, but it can only mount one
	  PAB within a profile. Generally, it is advised that users create only one
	  PAB, and specify this PAB in all profiles.
	
	17. Q. Can multiple users share the same Windows 95 workstation, use Microsoft
	  Exchange Windows 95 client, and keep their mail private, separate, and
	  secure?
	
	  A. Yes. The Microsoft Exchange Windows 95 client was designed to accommodate
	  a variety of user work scenarios. There are several ways to address the
	  needs mentioned above. Users can password protect their PST files and enable
	  User Profiles on the local machine. However, Server Based Setups offer a
	  more centralized approach to managing single workstation, multi-user
	  scenarios.
	
	  For more information, review the "Deployment Planning Guide &
	  Installation" section of Windows 95 Resource Kit help file.
	
	18. Q. Can a single user roam throughout a site, work at various workstations,
	  and still store all his or her mail in a single, secure message file?
	
	  A. Yes. There are several ways to approach this requirement. One solution
	  could be as simple as to have the user store his or her password protected
	  PST and PAB file in an accessible location on the network. The user can
	  create a Microsoft Exchange profile that specifies these files at every
	  workstation he or she work from.
	
	  However, a better solution would be to implement a Server-Based Setup that
	  enables the retrieval of a much larger set of user desktop/configuration
	  preferences from anywhere on the network, and run this configuration on the
	  current workstation.
	
	  For more information, review the "Deployment Planning Guide &
	  Installation" section of Windows 95 Resource Kit help file.
	
	19. Q. Is the MMF conversion to PST/PAB one-way only?
	
	  A. Yes. MMF-to-PST/PAB conversion is "one-way" only. However, the conversion
	  process does not alter the MMF. This MMF could be restored as the active MMF
	  to a re-installed version 3.x Microsoft Mail for PC Networks client.
	  However, there is no easy way to retrieve new mail that has spooled into a
	  user's PST(s) while Microsoft Exchange was the active mail client.
	
	20. Q. Where can I find more information about installing and using the
	  Microsoft Exchange Windows 95 client?
	
	  A. The Windows 95 Resource Kit help file's "Communications, Electronic Mail
	  and Microsoft Exchange" section contains information about installing,
	  configuring, and using the Microsoft Exchange Windows 95 client. This help
	  file can be found on the Windows 95 CD under the \ADMIN\RESKIT\HELPFILE
	  subdirectory.
	
	  Also, context sensitive help is available from within the client by pressing
	  the F1 key.
	
	  See also the EXCHANGE.TXT file located in the Windows 95 subdirectory.
	
	Additional query words: upgrade Win95 msmail exchange
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbSchedule100a kbMailPCN3xSearch kbSchedule700Win95 kbExchange400Win95
	Version           : WINDOWS:1.0,1.0a,3.x,4.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
