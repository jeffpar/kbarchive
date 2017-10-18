---
layout: page
title: "Q230293: ActiveX Data Objects 1.5 Release Notes"
permalink: kb/230/Q230293/
---

## Q230293: ActiveX Data Objects 1.5 Release Notes

	Article: Q230293
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the ActiveX Data Objects 1.5 Release Notes
	included with the Windows NT 4.0 Option Pack. It is listed here so that the
	issues it covers are included in queries performed against the Knowledge Base.
	
	The file containing these Release Notes is located in
	<%SystemRoot%>\Help\Iis\Htm\Core\Adorlnts.htm.
	
	NOTE: Knowledge Base articles may be distributed in either ASCII-text or HTML
	form. If you are viewing the ASCII-text version of this article, some formatting
	may have been lost when it was converted from the original HTML form of
	Adorlnts.htm.
	
	MORE INFORMATION
	================
	
	Microsoft ActiveX Data Objects 1.5 Release Notes
	This document provides late-breaking or other information that supplements the Microsoft(R) ActiveX(TM) Data Objects version 1.5 documentation.
	
	The following sections are included in this document:
	Product Description
	New Features
	Installation Notes
	Technical Support
	Known Issues
	Copyright Information 
	
	--------------------------------------------------------------------------------
	
	Product Description
	Microsoft ActiveX Data Objects (ADO) is an Automation-based interface for accessing data. ADO uses the OLE DB interface to access a broad range of data sources, including but not limited to data provided via ODBC.
	
	Users of RDO and DAO should quickly become comfortable with programming to ADO, because the overall design of ADO comes from our experience in developing those interfaces.
	
	--------------------------------------------------------------------------------
	
	New Features
	This release of ADO adds several features to give the developer more power and control in their applications. (See the documentation for more information about using these features). New features include the following:
	
	Integration with the Microsoft Client Cursors 
	As in RDO 2.0, developers now have a high performance client-side cursor engine which supports optimistic batch updating, disconnected Recordset objects, and more.
	
	Commands as Connection Methods 
	Using this feature, Commands associated with a connection become methods on that connection interface.
	
	Data Remoting 
	Using this feature, ADO users can transmit data across HTTP to a client, work on that data, and submit it back to the HTTP server again.
	
	--------------------------------------------------------------------------------
	
	Installation Notes
	Before You Run Setup
	Before you install ADO, make sure that your client and server computers meet the minimum hardware and software requirements.
	
	Hardware Requirements
	To install ADO, you must meet certain hardware requirements, which include the following:
	
	Any Microsoft(R) Windows(R) 95 or Microsoft(R) Windows NT(R) x86-compatible computer, or Digital Equipment Corporation ALPHA processor based machine. 
	A hard disk with a minimum of 14 megabytes (MB) available space for a full installation of all the updated components required for ADO to run. 
	A minimum of 12 MB of RAM for client computers. 
	A minimum of 24 MB of RAM for server computers (32 MB of RAM recommended). 
	Software Requirements
	Before you install ADO, your computer must meet the following software requirements:
	
	Any of the following platforms: Windows 95, Windows NT Workstation 4.0 or later, or Windows NT Server 4.0 (with Service Pack 3) or later. 
	To use ADO you will need a programming environment which supports Automation objects. Currently this includes (but is not limited to) products such as Microsoft(R) Internet Information Server 3.0 or 4.0 (with Active Server Pages), the products in Microsoft Office, and Microsoft Visual Studio(TM).
	
	--------------------------------------------------------------------------------
	
	Technical Support
	Visiting the Microsoft ActiveX Data Objects Web Site
	You can visit the Microsoft ActiveX Data Objects Home Page on the World Wide Web for documentation updates and information about other related technologies. The address is http://www.microsoft.com/data/ado/.
	
	Joining the OLE DB Public Newsgroup for Discussion of ActiveX Data Objects
	To facilitate discussion and information sharing, Microsoft has established a public newsgroup: microsoft.public.oledb. You are welcome to post articles and messages to this unmoderated, unsupported newsgroup. Microsoft does not guarantee responses or direct support. For more information, visit the Microsoft OLE DB Web site, http://www.microsoft.com/data/oledb/.
	
	--------------------------------------------------------------------------------
	
	Known Issues
	When using the ADO Connection object's Open method in Microsoft(R) Visual C++(R) or Microsoft(R) Visual J++(TM), or other languages which require all optional parameters to be specified, you need to specify a fourth parameter of -1. This parameter is a placeholder for a future option. Microsoft(R) Visual Basic(R) users don't need to set this parameter, as it will default to the correct value.
	
	If you are executing a JOIN query against an Oracle database, and request a keyset or dynamic cursor, you'll get an error rather than a downgraded cursor. Oracle supports only Static read-only cursors with joins.
	
	Executing two or more Command objects on the same connection to a Microsoft(R) SQL Server database will cause an error if any of the Command objects is a stored procedure with output parameters. If you're executing Microsoft SQL Server stored procedures with output parameters, you must use separate connections for each such Command object, or else disconnect the other Command objects from the connection (i.e., in Microsoft Visual Basic, Set cmd.ActiveConnection = Nothing).
	
	When using an ORDER BY clause in a query against Microsoft SQL Server with Microsoft SQL Server Service Pack 3 installed, columns referenced in the ORDER BY clause must also be referenced in the SELECT clause.
	
	When opening a Recordset with the CursorLocation property set to adUseClient (i.e., a client-side cursor), the UnderlyingValue property is not available on Field objects of the resulting Recordset.
	
	In ADO 1.5, it's possible to copy values from one Recordset field to another by using a command line such as:
	
	destRst.Fields("myfield") = srcRst.Fields("myfield")
	It has been found that explicitly specifying .Value on both sides of the expression will improve performance and will avoid a known issue with a small memory leak in this area. The new syntax to use would be: 
	destRst.Fields("myfield").Value  = srcRst.Fields("myfield").Value
	This should improve performance and avoid the memory leak.
	
	--------------------------------------------------------------------------------
	
	Copyright Information
	(C) 1997 Microsoft Corporation
	
	These materials are provided "as-is," for informational purposes only.
	
	Neither Microsoft nor its suppliers makes any warranty, express or implied with respect to the content of these materials or the accuracy of any information contained herein, including, without limitation, the implied warranties of merchantability or fitness for a particular purpose. Because some states/jurisdictions do not allow exclusions of implied warranties, the above limitation may not apply to you.
	
	Neither Microsoft nor its suppliers shall have any liability for any damages whatsoever including consequential, incidental, direct, indirect, special, and lost profits. Because some states/jurisdictions do not allow exclusions of implied warranties, the above limitation may not apply to you. In any event, Microsoft?s and its suppliers? entire liability in any manner arising out of these materials, whether by tort, contract, or otherwise shall not exceed the suggested retail price of these materials.
	
	--------------------------------------------------------------------------------
	
	(C) 1997 by Microsoft Corporation. All rights reserved.
	
	Additional query words: ado active data objects iis kbreadme readme adorlnts.htm adorlnts akz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
