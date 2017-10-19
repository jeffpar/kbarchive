---
layout: page
title: "Q185060: WD97: ODMA: How Word 97 Works With GroupWise 5.2"
permalink: /kb/185/Q185060/
---

## Q185060: WD97: ODMA: How Word 97 Works With GroupWise 5.2

	Article: Q185060
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what GroupWise(R) is and how Microsoft Word 97 for
	Windows integrates with GroupWise.
	
	MORE INFORMATION
	================
	
	GroupWise 5.2 is a cross-platform messaging and groupware product that enables
	you to expand beyond normal e-mail capabilities to access and manage calendar,
	scheduling, tasks, voice mail, faxes, and other message types from within a
	Universal Mailbox.
	
	GroupWise is also a document management system that enables you to control,
	organize, access, and share information. Word processing documents,
	spreadsheets, presentations, forms, images, e-mail messages, or any type of file
	you want to save can be managed through GroupWise.
	
	How GroupWise Document Management Works
	---------------------------------------
	
	Contained in GroupWise 5.2 is the document management system (DMS), which is
	extended to include all types of information including e-mail, voice mail,
	faxes, images, appointments, tasks, and workflows. Document libraries, hosted on
	a GroupWise Post Office, contains document properties while the actual documents
	are stored in a binary object store in a compressed and encrypted format. The
	GroupWise Post Office Agent is responsible for the maintenance of the document
	library and binary object store. Check-in, check-out, version control, security,
	and so forth, are built into the document library and the Post Office Agent. Any
	ODMA- compliant application can use the document management services of
	GroupWise 5.2.
	
	How Word 97 Integrates With GroupWise
	-------------------------------------
	
	As an Open Document Management (ODMA) compliant application, Word 97 searches in
	the Windows Registry during start-up for the following subkey to determine if a
	document management system (DMS) is installed.
	
	  \HKEY_LOCAL_MACHINE\Software\Classes\ODMA32
	
	If GroupWise is found as installed in this registry subkey, Word 97 initiates
	calls (hooks) into GroupWise using ODMA integration. As a result of this
	integration, several default Word functions are either replaced or supplemented
	with the GroupWise interface. These functions include the functions that are
	triggered by the following commands on the File menu:
	
	- Open
	
	- Close
	
	- Save
	
	- Save As
	
	- Save as HTML
	
	- Versions
	
	During the installation and integration of GroupWise, the following subkey is
	written to the Windows registry:
	
	  \HKEY_LOCAL_MACHINE\Software\Classes\ODMA32\GRPWISE
	
	NOTE: This is the registry subkey that informs ODMA-compliant applications that
	GroupWise is installed on the computer. If the subkey is removed from the
	Windows Registry, GroupWise ODMA integration with Word 97 will be disabled.
	
	
	Features of GroupWise
	---------------------
	
	GroupWise expands e-mail functionality to integrate collaboration capabilities.
	GroupWise includes the following features.
	
	  Feature                  Description
	  -----------------------------------------------------------------------
	
	  Integrated Desktop       Customizable environment in which you can
	                           access, organize, keep track of, profile/store,
	                           share and communicate information.
	
	  Universal Mailbox        Allows you to send, receive, and manage
	                           multiple types of information (for example,
	                           e-mail, voice mail, faxes, calendar events,
	                           tasks, documents, workflows, and so forth) used
	                           by both network-connected and remote users.
	
	  Internet/Intranet        URL's, Internet e-mail addresses, and FTP
	  Integration              file names included in the subject or message
	                           body of a GroupWise include hyperlinks to
	                           your default browser, Send Mail view, or FTP
	                           application.
	
	  E-Mail Client            Includes status tracking and retraction of
	                           outbound messages; CC and BCC; attachments and
	                           document references; an integrated speller,
	                           thesaurus and QuickCorrect composition coach;
	                           and the ability to convert message types (for
	                           example, a mail message converted to a task,
	                           appointment or note).
	
	  Work-In-Progress         Lets you track calendar events and to-do lists,
	                           maintain personal address books, and manage a
	                           "work-in-progress" folder, which holds
	                           unfinished items until completed.
	
	  Group Calendaring        Offers wide-area calendar and scheduling
	                           capabilities -- including busy schedule and
	                           auto-date scheduling, and proxy and busy search
	                           across post offices.
	
	  Replicated Shared        Allows you to provide others with access to
	  Folders                  specific folders for workgroup and
	                           collaborative interaction, including group
	                           document editing.
	
	  Document Management      DMS services which includes check-in/check-out
	                           (for single documents, single folders, multiple
	                           folders, selected documents from a single
	                           folder, or selected documents from multiple
	                           folders), concurrency control and versioning.
	
	  Integrated WorkFlow      Allows transport and tracking of work items
	  Services                 created by desktop applications. Provides a
	                           graphical workflow tool to define serial,
	                           parallel, broadcast, conditional and workflow
	                           "joins" without having to write code.
	
	  GroupWise                Allows you to access, share and manage many
	  Post Office              types of information without the limits as to
	                           platform or document type.
	
	                           Features:
	
	                           - Support of multiple message types/documents
	                           - Preservation of attributes and context of
	                             Mailbox items
	                           - Concurrent access to information
	                           - MAPI 1.0, ODMA, LDAP, CMC/CSA, POP3 and IMAP4
	                             service provider
	
	  GroupWise Imaging        View, store, edit, and route scanned image
	                           files across corporate networks and intranets
	                           via the GroupWise Universal Mailbox.
	
	System Requirements
	-------------------
	
	The following are the system requirements to run GroupWise.
	
	Microsoft Windows 95 Client:
	
	- 486/33 megahertz (MHz) processor or greater
	
	- 16 megabytes (MB) random access memory (RAM)
	
	- 6 MB minimum available hard disk space. 24 MB available hard disk space
	  recommended.
	
	Microsoft Windows NT Client:
	
	- Microsoft Windows NT 3.51 or greater
	
	- 486/33 MHz processor or greater
	
	- 16 MB RAM memory
	
	- 6 MB minimum available hard disk space. 24 MB available hard disk space
	  recommended.
	
	REFERENCES
	==========
	
	Novell and GroupWise are registered trademarks of Novell, Inc. in the United
	States and other countries.
	
	GroupWise 5.2, Copyright (C) 1998 Novell, Inc. All rights reserved. Used and
	reprinted with permission from Novell, Inc.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q159963 WD97: Word 97 Supports ODMA
	
	For more information about GroupWise, please contact Novell.
	
	  Novell
	  GroupWise Support
	  122 East 1700 South
	  Mail Stop E-33-1
	  Provo, UT 84606 USA
	
	  Technical Support: (801) 861-4000 or (800) 858-4000
	  Fax : (801) 861-2660
	  Internet : http://www.novell.com/groupwise
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: api
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
