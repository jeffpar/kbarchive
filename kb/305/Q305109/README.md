---
layout: page
title: "Q305109: XADM: Exchange Server 5.5 Mailbox Manager Overview"
permalink: /kb/305/Q305109/
---

## Q305109: XADM: Exchange Server 5.5 Mailbox Manager Overview

	Article: Q305109
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an overview of Exchange Server 5.5 Mailbox Manager. This
	article contains the following sections:
	
	- What is Mailbox Manager?
	
	- Overview of Mailbox Manager Features
	
	- How Mailbox Manager Works
	
	- Planning
	
	- Setup and Installation
	
	- Configuration
	
	- Policies
	
	- Schedule
	
	- Notification
	
	- Server Selection
	
	- Advanced
	
	- How Mailbox Manager Marks Excluded Mailboxes
	
	MORE INFORMATION
	================
	
	What is Mailbox Manager?
	------------------------
	
	Mailbox Manager is an add-on for Exchange Server 5.5 that administrators can use
	to manage items in different mailbox folders. You can determine which messages
	you want to delete, and then use Mailbox Manager to set rules that specify how
	old you want messages to be when they are deleted and how often you want old
	messages to be deleted. You can also set Mailbox Manager to generate reports
	when it deletes messages, and you can set exclusions for types of messages and
	mailbox folders that you do not want Mailbox Manager to process.
	
	In versions of Exchange Server that are earlier than Exchange Server 5.5 Service
	Pack 3 (SP3), this tool is called the Mailbox Cleanup Agent. In Exchange Server
	5.5 SP3, many improvements and greater flexibility were added to this tool.
	Therefore, if there is a problem with your installation of the Mailbox Cleanup
	Agent, first try to install Mailbox Manager instead of the Mailbox Cleanup
	Agent.
	
	Overview of Mailbox Manager Features
	------------------------------------
	
	Mailbox Manager implements corporate e-mail message retention policies. Mailbox
	Manager features include:
	
	- Configuration flexibility. You can set Mailbox Manager to delete messages by
	  age, folder size, message type, and other parameters.
	
	- Automation. You can create a weekly schedule that specifies when Mailbox
	  Manager deletes messages from Exchange Server mailboxes.
	
	- Report generation. You can request that detailed reports of message removal
	  and other Mailbox Manager activities be logged and sent to administrators.
	
	How Mailbox Manager Works
	-------------------------
	
	Mailbox Manager works by implementing message deletion policies. A policy is a
	set of rules that determines whether a message is retained or deleted. For
	example, you can use Mailbox Manager to implement rules such as:
	
	- Delete all of the messages that are more than 5 days old from users' Inboxes.
	
	- Delete all of the messages that are older than 20 days, except Calendar and
	  Contact items.
	
	- Set a retention limit of 30 days on Inbox Folders, and 45 days on all other
	  folders.
	
	- Allow users in the Marketing recipient container to retain their messages for
	  20 days, but allow users in the Temporary Staff recipient container to keep
	  their messages for only 5 days.
	
	- Delete messages larger than 1 megabyte (MB) after 10 days.
	
	- Allow users a 3-day grace period before their messages are permanently
	  deleted.
	
	For additional information about the way that Mailbox Manager processes items,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q258758 XADM: Understanding How and When Mailbox Manager Processes Items
	
	Planning
	--------
	
	General Planning:
	
	You can install Mailbox Manager on any server in an Exchange Server site, or on
	multiple servers in the site. Each instance of Mailbox Manager maintains its own
	policy information, and you must configure each instance individually. Mailbox
	Manager can delete messages in mailboxes that do not reside on the server that
	Mailbox Manager is installed on.
	
	Multiple Server Environment Planning:
	
	When the Exchange Server site consists of multiple Exchange Server computers, you
	can install Mailbox Manager on one, more than one, or all of the servers.
	
	Planning to Install Mailbox Manager on a Single Exchange Server Computer:
	
	If Mailbox Manager is installed on one server, that instance of Mailbox Manager
	is responsible for deleting messages on all of the servers in a site. From a
	maintenance standpoint, this configuration is the simplest. One server contains
	the message deletion policy for the entire site. However, this configuration
	requires that Mailbox Manager gain access to mailboxes on servers across local
	area network (LAN) and wide area network (WAN) links. In this configuration,
	Mailbox Manager might create a large amount of traffic while Mailbox Manager is
	implementing the policy.
	
	Planning to Install Mailbox Manager on Multiple Exchange Server Computers:
	
	You can reduce network traffic by installing Mailbox Manager on multiple servers
	in the site and configuring each instance of Mailbox Manager to gain access to
	only those mailboxes that are physically saved on the same server. However, this
	configuration requires that each instance of Mailbox Manager be configured with
	an appropriate deletion policy. Users must make sure that message deletion
	policies are not contradictory, and that individual mailboxes are not targeted
	by more than one policy.
	
	Setup and Installation
	----------------------
	
	Setup consists of two parts: creating the Mailbox Manager account and setting up
	Mailbox Manager.
	
	Replacing the Mailbox Cleanup Agent:
	
	Mailbox Manager replaces the Mailbox Cleanup Agent (Mbclean.exe), which is part
	of the Microsoft BackOffice Resource Kit, Second Edition. If you previously
	installed the Mailbox Cleanup Agent, its policy settings are reset when you
	install Mailbox Manager. Mailbox Manager and the Mailbox Cleanup Agent can
	coexist in the same Exchange Server site, but not on the same Exchange Server
	computer. If the Mailbox Cleanup Agent was installed on the server, you must
	remove the Mailbox Cleanup Agent before you install Mailbox Manager. Remove the
	Mailbox Cleanup Agent by running the original Setup, and then choose the Remove
	option.
	
	Creating the Mailbox Manager Service Account:
	
	Mailbox Manager uses a Microsoft Windows NT service. You must select or create an
	account for this service to use. This account must have administrator
	permissions for the Exchange Server site in which you want to install Mailbox
	Manager. In most cases, you should use the Windows NT account that you used for
	the other Exchange Server services because that account automatically has
	Service Account Administrator permissions for the site. The account that you
	select must have Windows NT Log On As Service user rights. If you have not
	already assigned the account this user right, the Mailbox Manager Setup program
	assigns the account this user right for you.
	
	Installing Mailbox Manager:
	
	If you are installing Mailbox Manager from the Exchange Server 5.5 SP3 CD-ROM,
	run Setup.exe from the following folder
	
	  <drive>:\Eng\Server\Support\Mbmngr\Setup
	
	Mailbox Manager is also located in the same folder in the Exchange Server 5.5 SP4
	files. Run Setup.exe, and then follow the instructions in the wizard. For
	additional information about Mailbox Manager Setup, see the Microsoft Exchange
	Server Mailbox Manager User's Guide that is located in the same folder as the
	Mailbox Manager Setup files.
	
	Configuration
	-------------
	
	To configure Mailbox Manager:
	
	1. Start the Exchange Server Administrator program.
	
	2. Locate the site that Mailbox Manager is installed in.
	
	3. Click the Configuration object for that site.
	
	4. Click Add-Ins.
	
	5. Click Mailbox Manager for <server_name> in the right pane (where
	  <server_name> is the name of the server that Mailbox Manager is
	  installed on.
	
	All of the configuration tabs for Mailbox Manager are optional, except the
	mandatory Policies tab. You can configure the options in any order.
	
	Policies
	--------
	
	Implementing Policy:
	
	Mailbox Manager maintains two types of policy rules: those that apply to all
	affected mailboxes regardless of recipient container, and those that apply only
	to mailboxes in a particular recipient container. Mailbox Manager also maintains
	a list of mailboxes to explicitly exclude from automated message deletion.
	Mailbox Manager runs the different parts of a policy in the following order:
	
	- If the mailbox is on the Excluded Mailbox list, that mailbox is exempt from
	  further processing.
	
	- Mailbox Manager processes the Deleted Items folder and System Cleanup folder
	  first. Messages that are older than the specified age limits for these
	  folders are deleted immediately. Message age is the only relevant criterion;
	  Mailbox Manager ignores message size limits and message class exclusions when
	  processing the Deleted Items and System Cleanup folders.
	
	- Mailbox Manager examines the rest of the folders in turn, and evaluates
	  whether or not each folder should be processed. Note that message size limits
	  apply to all of the folders in a mailbox (except the Deleted Items and System
	  Cleanup folders).
	
	- In folders that should be processed, Mailbox Manager examines each message;
	  if the message class is in the Excluded Message Classes list, the message is
	  retained.
	
	- In folders that should be processed, if a message size limit is set, Mailbox
	  Manager checks the size and age of each message. Oversized messages that are
	  older than the threshold age are deleted.
	
	- In folders that should be processed, if the message is older than the age
	  limit for that folder, the message is deleted.
	
	General Policies:
	
	General Policies apply to all of the recipient containers that you select.
	
	Message Classes:
	
	You can use the Message Classes option to exclude certain message classes from
	deletion. For example, you might not want Mailbox Manager to delete any
	Contacts, regardless of the age or size of the Contact item. To exclude a
	message class:
	
	1. Click Message Classes.
	
	2. In the Message Classes dialog box, type the name of the class that you want
	  to exclude, and then click Add each time.
	
	The standard non-mail Outlook classes are IPM.Appointment, IPM.Task, IPM.Contact,
	IPM.Activity, IPM.Note, IPM.Post, and IPM.StickyNote. For example, if you do not
	want to delete Contacts or Calendar items, add IPM.Contact and IPM.Appointment
	to the Excluded Message Classes list.
	
	You can also exclude message classes and their subclasses by using a wildcard
	character. For example, if you exclude "IPM.MyClass.*", Mailbox Manager excludes
	all of the classes that begin with IPM.MyClass. If you want to exclude all of
	the standard contact items and all of the custom message classes that are
	derived from the standard contact class, add "IPM.Contact.*" to the list of
	excluded message classes. If you do not use a wildcard character, Mailbox
	Manager only searches for an exact match for a message class. No message classes
	are excluded by default. For additional information about configuring Mailbox
	Manager to exclude specific message classes, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q244213 XADM: How to Configure the Mailbox Manager to Ignore Certain Message
	  Classes
	
	Message Size Limits:
	
	You can use message size limits to limit the lifetime of a message based on its
	size and age (in days). For example, you can configure Mailbox Manager to delete
	all of the messages that are larger than 250 kilobytes (KB) after 10 days. If
	you apply a message size limit, the length of time that it takes for Mailbox
	Manager to process a mailbox might dramatically increase. The default settings
	are 1,024 KB and 30 days. If you set the number of days to zero, oversize
	messages are deleted immediately.
	
	Per-Container Policies:
	
	Per-container policies apply on a per-container basis. This type of policy
	includes Excluded Mailboxes and Folder Age Limits policies.
	
	Excluded Mailboxes:
	
	Use the Excluded Mailboxes dialog box to select mailboxes that you want to
	exclude from automated message deletion. By default, no mailboxes are excluded.
	
	Folder Age Limits:
	
	You can specify the deletion time period for the items in a particular folder.
	The default for this interval is 30 days. If you set the interval to 0 days, all
	of the messages in that folder are deleted each time that you run Mailbox
	Manager.
	
	The Other Folders option sets the age limit for all folders other than those
	folders that you specifically list in the dialog box. All subfolders, including
	subfolders of the listed folders, belong to this category. For example, a
	subfolder of the Inbox folder does not take its age limit from its parent
	folder, Inbox, but from the Other Folders value. However, the age limit for the
	System Cleanup Folders applies to the System Cleanup folder and all of its
	subfolders. By default, there are no age limits set on any folder when Mailbox
	Manager is installed.
	
	Use Parent Container Settings:
	
	When the Use Parent Container Settings check box is selected, recipient
	containers that are subordinate to another container assume the message deletion
	policy of the parent recipient container. This inheritance of parent container
	settings is not dynamic. The parent container's policy information is copied to
	its child containers when you click Apply or OK. If you create a new recipient
	container, there is no configuration information associated with the new
	recipient container until you run the Exchange Server Administrator program, at
	which time the new recipient container inherits the configuration of its parent
	container.
	
	Schedule
	--------
	
	On the Schedule tab, you can specify the time at which Mailbox Manager performs
	the mailbox cleanup according to settings on the Policy tab. The time is the
	local server time of the server that is running Mailbox Manager (not the local
	time of the server that is running the Exchange Server Administrator program).
	The default setting is Saturday at 12:00 midnight.
	
	Clean Now:
	
	The Clean Now option runs the current mailbox cleanup policy within thirty
	seconds after you click Clean Now. Clicking Clean Now does not affect the preset
	schedule, as set on the Schedule tab. Mailbox Manager still runs at the set
	time. If you change your policy settings and click Clean Now, you are prompted
	to save your changes by clicking Apply before Mailbox Manager can proceed. The
	Clean Now button is unavailable (appears dimmed) if you are a read-only
	Administrator.
	
	Starting and Stopping the Service:
	
	You can stop the Mailbox Manager service from the Window NT Service Control
	Manager. If you stop the Mailbox Manager service while Mailbox Manager is
	actively processing mailboxes, Mailbox Manager starts its next processing run
	where it left off. To force Mailbox Manager to perform a complete run after
	Mailbox Manager has been interrupted, delete the ProcessedMailboxes.txt file
	from the Mailbox Manager installation folder.
	
	Scheduling Considerations:
	
	There are several factors that you need to consider when you are determining the
	mailbox maintenance schedule:
	
	- The amount of message traffic that the server processes at a given time.
	
	- Business requirements for server space. You can clean mailboxes as often as
	  you like; however, by default, mailbox cleanup occurs once a week.
	
	- The message retention requirements of the users, and the level of voluntary
	  compliance of those users with mailbox limits.
	
	- The larger the number of messages that a policy targets, the longer it takes
	  to execute the policy.
	
	When you choose a mailbox maintenance schedule, weigh the benefits of running
	Mailbox Manager frequently against the impact that the run cycle will have on
	system performance.
	
	Notification
	------------
	
	You can use the Notification tab to specify that Mailbox Manager inform users (by
	means of e-mail messages) when Mailbox Manager scans the users' mailboxes for
	messages that violate the policy as set on the Policies tab, and inform users
	when Mailbox Manager deletes those messages that violate the policy. You can set
	the content of the notification message. User notification is enabled by
	default, and all affected users are notified. If the Run Mode is set to Audit,
	Mailbox Manager does not send notifications to users.
	
	Use the Notify User check box to specify whether or not Mailbox Manager sends
	notification messages to users. You can use the Header, Body, and Footer options
	to customize the notification message. The default header text is:
	
	  The Microsoft Exchange Server Mailbox Manager has performed an automated
	  cleanup of your mailbox.
	
	The body of the message is automatically generated by Mailbox Manager and
	consists of one line for each affected folder, for example:
	
	  23 Items were moved from the Inbox folder to the Deleted Items folder.
	  12 Items were moved from the Inbox\Subfolder to the Deleted Items folder.
	  10 Items were deleted from the Deleted Items folder.
	
	There is no default footer text. You may want to add text, for example:
	
	  Thank you for your future voluntary compliance with corporate e-mail deletion
	  policies!
	
	Server Selection
	----------------
	
	Mailbox Manager can delete messages from mailboxes that are stored locally (on
	the same server as Mailbox Manager), as well as from mailboxes that are stored
	on other servers. You can use the Server Selection tab to select the servers in
	the site that you want this instance of Mailbox Manager to process. By default,
	only mailboxes on the local server are processed; if you do not select a server,
	the mailboxes on that server are not processed. Click Select All to select all
	of the servers in the site. Click Clear All to clear all of the servers in the
	site.
	
	Advanced
	--------
	
	On the Advanced tab, you can set the level of detail in the reports and logs that
	Mailbox Manager generates. This section describes the types of reporting and
	logging that are available, and how to use that information for effective
	mailbox management. Mailbox Manager generates three types of reporting
	information:
	
	- Trace log files
	
	- Entries in the Windows NT event log
	
	- Reports mailed to the administrator
	
	All of these reports contain common information, such as the time at which
	Mailbox Manager started, the time at which it finished, the number of messages
	that it moved, and other information. The trace log files and event log files
	might contain detailed information, depending on the Logging Level setting. The
	administrative reports are intended to give a broad overview of the operations
	of Mailbox Manager. For additional information about Mailbox Manager logging,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q244586 XADM: Mailbox Manager Logging Levels in Exchange Server
	
	How Mailbox Manager Marks Excluded Mailboxes
	--------------------------------------------
	
	When you use Mailbox Manager, it "marks" mailboxes with special entry on the
	"E-mail addresses" tab to indicate which mailboxes are excluded from cleanup and
	which are not. This entry is not added if the mailbox is not added to the
	Excluded Mailboxes list. If you include a mailbox in the Excluded Mailboxes
	list, an MBX entry with a value of "1" is added to the "E-mail addresses" tab of
	that mailbox. If you then remove the mailbox from the Excluded Mailboxes list,
	the MBX value is not removed, but is set to a value of "0." Because of this,
	some mailboxes have no MBX address, some have an MBX address with a value of
	"1," and some have an MBX address with a value of "0," for example:
	
	- You install Mailbox Manager, but you do not add mailboxes to the Excluded
	  Mailboxes list. There is no change to the E-mail addresses tab on the
	  mailboxes.
	
	- You add mailbox A to the excluded mailboxes. An MBX entry is added to mailbox
	  A's E-mail addresses tab with a value of "1."
	
	- You remove mailbox A from the excluded mailboxes. The MBX entry remains on
	  mailbox A's E-mail addresses tab, but the value is set to "0."
	
	It is important to note that you can only add MBX entries to mailboxes by using
	Mailbox Manager. If you attempt to add MBX entries either manually or by using
	directory import, you receive the following error message:
	
	  This e-mail address already exists in this organization
	
	For additional information about how Mailbox Manager uses the MBX entry, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q242212 XADM: Mailbox Manager Mailbox Exclusion Information Stored Using MBX
	  Proxy Address
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
