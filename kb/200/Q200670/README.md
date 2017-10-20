---
layout: page
title: "Q200670: SMS: Customizing the SMS Administrator Console"
permalink: /kb/200/Q200670/
---

## Q200670: SMS: Customizing the SMS Administrator Console

{% raw %}

	Article: Q200670
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Systems Management Server version 2.0, the Systems Management
	Server Administrator console is a Microsoft Management Console (MMC) snap-in
	that can be customized by adding specific Console Tree Items (for example,
	Collections). Using Systems Management Server Console security, you can further
	limit console functionality by customizing the view that your administrators
	have of the Systems Management Server Administrator console. You set permissions
	on object classes and instances using the Security console item.
	
	MORE INFORMATION
	================
	
	When combined with MMC customizable consoles, the Systems Management Server 2.0
	security model makes it easy to delegate Systems Management Server
	administrative tasks. Administrative tasks can be delegated by group. Define
	local groups on the site server that relate to required tasks. Corresponding
	global groups or users can be added as necessary. For example, a user group
	called HelpDesk can be created. Full permissions for Systems Management Server
	Remote Tools can be assigned to this group, but not permissions for Site
	Configuration objects. You can also create a customized MMC console that
	includes only the objects that the group requires to perform the tasks delegated
	to them. In this way, you can provide members of the HelpDesk group with all the
	tools required to support end users, yet prevent them from accessing unnecessary
	objects.
	
	The following example outlines the steps needed to create a custom MMC console
	that shows only the Collections tree item. The second set of instructions
	demonstrates how to set security options so that the HelpDesk group will be able
	to view and use Remote Tools on the "All Windows NT Systems" collection.
	
	NOTE: Members of the HelpDesk local group or corresponding HelpDesk global group
	are required to be members of the permitted viewers list for the Remote Tools
	Client Agent and of the SMS Admins local group on the server housing the Systems
	Management Server provider (either the SQL or SMS system). Using this method, it
	is not necessary to directly add users through the Web Based Enterprise
	Management Permissions Editor (WBEMPERM).
	
	To Create a Customized Systems Management Server Console:
	
	1. If the Systems Management Server Administrator console is running, quit the
	  program.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "MMC" (without the quotation marks), and then click OK.
	
	4. On the Console menu, click "Add/Remove Snap-in".
	
	  The "Add/Remove Snap-in" dialog box is displayed.
	
	5. Click Add.
	
	  The "Add Standalone Snap-in" dialog box is displayed.
	
	6. Click Systems Management Server and then click Add.
	
	  The Site Database Connection Wizard starts.
	
	7. Click Next. The Locate Site Database dialog box is displayed. Specify the
	  site database to connect to.
	
	8. Verify that "Reconnect to a site database" is selected, and then click
	  "Select console items to be loaded (custom)".
	
	9. Click Next.
	
	  The Console Tree Items dialog box is displayed with the Systems Management
	  Server console tree objects that are available for the new console.
	
	10. Clear all options except Collections, and then click Next.
	
	  The Completing the Site Database Connection Wizard dialog box is displayed,
	  displaying settings for the new console.
	
	11. Click Finish.
	
	  The "Add Standalone Snap-in" dialog box is displayed.
	
	12. Click Close.
	
	  Systems Management Server is now displayed as a snap-in. Click OK.
	
	13. If it is necessary to prevent users of the custom console from adding
	  additional snap-ins, follow these steps:
	
	  a. On the Console menu, click Options.
	
	  b. On the User tab, verify that "Always open console files in Author mode" is
	     cleared (not checked).
	
	  c. Click the Console tab and change the Console mode to any of the three User
	     Mode options, and then click OK.
	
	14. On the Console menu, click Save As.
	
	  The Save As dialog box is displayed.
	
	15. Type a name for this specialized console and click Save.
	
	You have now created a custom console as a file that you can distribute to help
	desk users. These users require at least NTFS Read access to this file.
	
	To Set up Security Permissions
	------------------------------
	
	1. Start the Systems Management Server Administrator Console.
	
	2. Go to Site Database, and then click Security Rights.
	
	3. Right-click Security Rights, click New, and then click Instance Security
	  Right.
	
	4. For user name, type "Domain\UserA" (without the quotation marks) or
	  "Domain\GroupNameA" (without the quotation marks).
	
	5. For Class, select Collection.
	
	6. For Instance, select "All Windows NT Systems".
	
	7. For permissions, select Read, Use Remote Tools, and Read Resource.
	
	8. Click OK.
	
	NOTE: In step 3 it is possible to specify a new Class Security Right that enables
	the HelpDesk group to use Remote Tools for all collections. (It may be necessary
	to assign additional permissions for a HelpDesk Console, such as Status-Read and
	Queries-Read). It is also possible to grant appropriate permissions by starting
	the SMS User Wizard from Site Database | Security Rights | Right click |All
	Tasks | Manage SMS Users.
	
	WMI 1.5-Enabled Computers
	-------------------------
	
	Computers that have been upgraded to Windows Management Instrumentation (WMI) 1.5
	or Microsoft Windows 2000-based computers do not have the WMI 1.1 tool
	(Wbemperm.exe).
	
	NOTE: Windows NT 4.0 users which have WMI 1.5 installed, also need to install the
	Microsoft Security Configuration Editor (MSSCE), included on the Windows NT 4.0
	Service Pack 4 (SP4) (and later) CD-ROM. On Windows NT-based computers, the tool
	is Wbemcntl.exe. MSSCE is required to edit the Access Control Lists (ACLs) on
	the Windows Installer (WI) namespaces.
	
	
	REFERENCES
	==========
	
	Also see the following Knowledge Base articles:
	
	  Q230263 How to Create Custom MMC Snap-in Tools Using Microsoft Management
	  Console
	
	  Q199869 SMS: Assigning Class and Instance Security Rights with the SMS User
	  Wizard
	
	  Q201126 SMS: Troubleshooting Connectivity to the SMS Site Database
	
	Additionally, the BackOffice 4.5 Resource Kit contains related information:
	Search for 'Custom MMC' from Microsoft Resource Kit Online Books.
	
	Additional query words: prodsms custom MMC wbemperm exe wbemcntl
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
