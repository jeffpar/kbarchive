---
layout: page
title: "Q140212: ADT95: Microsoft ADT Licensing Questions and Answers"
permalink: /kb/140/Q140212/
---

## Q140212: ADT95: Microsoft ADT Licensing Questions and Answers

{% raw %}

	Article: Q140212
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	1. Q. How can developers distribute solutions built with Microsoft Access for
	  Windows 95 version 7.0?
	
	  A. The Microsoft Access Developer's Toolkit for Windows 95 includes a
	  royalty-free run-time license that permits developers to distribute solutions
	  built with Microsoft Access via a "run-time version" of Microsoft Access for
	  Windows 95.
	
	2. Q. What are the differences between the retail and run-time versions of
	  Microsoft Access for Windows 95?
	
	  A. The retail and run-time versions are exactly the same, except that design
	  capabilities have been "turned off" in the run-time version. Turning off
	  design capabilities means that solution users can change the data but not the
	  design of their solution. Examples of design changes include modifying
	  database objects (tables, forms, reports, and queries) and using the wizards
	  in Microsoft Access. The run-time version also does not support the new
	  Filter-By-Form feature in Microsoft Access for Windows 95 because this is
	  technically a design capability.
	
	  Users who want design capabilities can purchase and install the retail version
	  of Microsoft Access.
	
	3. Q. Does the run-time version support the replication features of Microsoft
	  Access?
	
	  A. The run-time version of Microsoft Access supports any replication scheme
	  set up by the developer of the solution. (Replication information is stored
	  in the database (.MDB file) itself, so it is not effected by the run-time
	  version of Microsoft Access). Replication features which are dependent on
	  changing the design of the database (for example, Briefcase replication)
	  require a retail installation of Microsoft Access.
	
	4. Q. Does the run-time version support the security features of Microsoft
	  Access?
	
	  A. The run-time version of Microsoft Access supports the Microsoft Access
	  security model which developers can use to secure data and solutions from
	  unauthorized user access. This means that users receiving the run-time
	  solution cannot alter the security implementation or their permissions on the
	  database. This is true even if the user purchases a retail version of
	  Microsoft Access because the security information is stored separately in
	  SYSTEM.MDA, and cannot be modified by anyone but the developer.
	
	5. Q. Can developers use the Microsoft Access Developer's Toolkit for Windows 95
	  to distribute Microsoft Access 2.0 solutions?
	
	  A. No. The Microsoft Access Developer's Toolkit for Windows 95 supports
	  solutions developed with Microsoft Access for Windows 95. Developers wanting
	  to distribute solutions with Microsoft Access 2.0 should purchase the
	  Microsoft Access Developer's Toolkit 2.0. (This product will be available for
	  a limited time after the Microsoft Access Developer's Toolkit for Windows 95
	  is commercially available.) Please contact your local reseller or Microsoft
	  account representative for more information on any of these products.
	
	  Registered Microsoft Access Developer's Toolkit 2.0 owners can receive a $100
	  rebate when they upgrade to Microsoft Access Developer's Toolkit for Windows
	  95. (The rebate coupon is included in the Microsoft Access Developer's
	  Toolkit and is valid until December 31, 1996.)
	
	6. Q. Can developers continue to use both versions of the Microsoft Access
	  Developer's Toolkit to distribute solutions in mixed environments?
	
	  A. Yes. The Microsoft Access Developer's Toolkit for Windows 95 license
	  permits developers to continue to use the Microsoft Access Developer's
	  Toolkit version 2.0 after upgrading to the newer version.
	
	  Note that developers may not transfer their Microsoft Access Developer's
	  Toolkit 2.0 license to anyone else after upgrading to the Windows 95 version,
	  unless both versions are transferred to the new licensee. The Microsoft
	  Access Developer's Toolkit for Windows 95 license agreement covers this topic
	  in more detail.
	
	7. Q. Does a single copy of the Microsoft Access Developer's Toolkit license
	  multiple developers working together to each distribute solutions?
	
	  A. No. The Microsoft Access Developer's Toolkit is licensed on a per-
	  developer basis. Each license permits one developer to distribute an
	  unlimited number of solutions with the run-time version of Microsoft Access.
	  Developers must purchase their own copy of the Microsoft Access Developer's
	  Toolkit if they want to distribute solutions using the Microsoft Access
	  run-time version.
	
	  A company or organization that purchases a copy of the Microsoft Access
	  Developer's Toolkit must designate a single developer who will be given the
	  right to use the software.
	
	  As an illustration, assume there are two developers in a company, DEV-A and
	  DEV-B, and a single customer named CUST who uses their Microsoft Access
	  solutions. If DEV-A purchases the Microsoft Access Developer's Toolkit (or
	  the company purchased it and designated DEV-A as the license holder) and
	  provides a run-time version of Microsoft Access to CUST, then DEV-A can
	  distribute an unlimited number of Microsoft Access solutions or databases to
	  CUST.
	
	  DEV-A only has to provide CUST the run-time version in the first solution.
	  Each subsequent solution or database can then reuse the run-time version that
	  CUST has already received from DEV-A.
	
	  If DEV-B wants to distribute a solution built with Microsoft Access to CUST,
	  DEV-B is not licensed to use the Microsoft Access run-time version until he
	  or she purchases the Microsoft Access Developer's Toolkit.
	
	  The important point is that once DEV-B has purchased the Microsoft Access
	  Developer's Toolkit, DEV-B has the right to distribute the run-time version.
	  DEV-B may also rely on a run-time version a customer has already received
	  through a solution provided by another Microsoft Access Developer's Toolkit
	  licensee. DEV-B may do this, provided that he or she has purchased the
	  Microsoft Access Developer's Toolkit.
	
	8. Q. Where else can developers get information about using the run-time version
	  of Microsoft Access for Windows 95?
	
	  A. Additional information is in the End User License Agreement (in the product
	  box), including guidelines on the types of solutions that may be distributed
	  with the run-time version and legal restrictions on international
	  distribution of run-time solutions.
	
	9. Q. Can developers distribute all the files that are in the Microsoft Access
	  Developer's Toolkit?
	
	  A. No, certain files are not redistributable. For a complete list of files
	  which can be redistributed, see the ADTEULA.TXT file in the Microsoft Access
	  Developer's Toolkit. This file is installed in the ADT directory as part of
	  the setup process.
	
	  ADTEULA.TXT includes two listings of the redistributable files in the
	  Microsoft Access Developer's Toolkit. The first section, REDISTRIBUTABLE FILE
	  LISTING, includes all redistributable files other than Microsoft Replication
	  Manager files. Microsoft Replication Manager redistributable files are listed
	  in the second section, REPLICATION MANAGER REDISTRIBUTABLE FILE LISTING.
	  These two redistributable file listings are each governed by different
	  licensing terms. Consult the Microsoft Access Developer's Toolkit license
	  agreement for further details.
	
	10. Q. What are "Data Access Objects" (or what is DAO)?
	
	  A. Data Access Objects, or DAO, is the OLE Automation interface to the Jet
	  database engine. DAO is how developers programmatically control the Jet
	  database engine in products which include Jet such as Microsoft Access,
	  Microsoft Excel, Microsoft Office, Microsoft Visual Basic, and Microsoft
	  Visual C++.
	
	  DAO and the Jet engine are actually the same component, but the OLE
	  Automation interface enables developers to work with the Jet engine outside
	  of an application that includes Jet. For example, once DAO and Jet are
	  installed on a desktop (by any of the Microsoft applications listed above),
	  a developer can programmatically control the Jet engine using Visual Basic
	  for Applications in Microsoft Project. In effect, this means the developer
	  is enabled to use Jet as a stand-alone database engine in addition to using
	  it with the application that installed it.
	
	11. Q. How do developers distribute solutions that use DAO?
	
	  A. There are three cases:
	
	  1. If the developer builds a solution in an application that includes Jet but
	     does not have a run-time version, for example Microsoft Excel or Microsoft
	     Office, the developer must purchase and install a copy of the application
	     on each user's desktop for the solution to run correctly.
	
	  2. If the developer builds a solution in an application that includes Jet and
	     provides a run-time license or compilation, for example Microsoft Access
	     (with the Microsoft Access Developers Toolkit), Microsoft Visual Basic, or
	     Microsoft Visual C++, subject to the end user license agreements
	     accompanying each of these products, the developer can build and
	     distribute the solution to users with a run-time version or as a compiled
	     application (.EXE).
	
	  3. If the developer builds a solution in an application which does NOT
	     include Jet, but relies on Jet, (for example, Microsoft Project or
	     Microsoft Visual FoxPro), the developer faces two requirements. First, the
	     developer must adhere to the license agreement for the application used to
	     develop the solution. Second, the developer must purchase and install a
	     copy of a Microsoft application or tool which DOES include Jet on the
	     user's desktop.
	
	12. Q. Can users access Jet through the DAO interface if they have a solution on
	  their desktop created in Microsoft Access (via the Microsoft Access
	  Developer's Toolkit), Microsoft Visual Basic, or Microsoft Visual C++?
	
	  A. This question maps to the second case listed above.
	
	  In fact, users that receive a solution which was built in one of these
	  applications are not able to access DAO. In other words, although Jet may in
	  fact be on the user's desktop, DAO is a design capability which is not
	  enabled in run-time or compiled solutions.
	
	  Users that want to use DAO can purchase and install any application that
	  includes the Jet database engine, including Microsoft Access, Microsoft
	  Excel, Microsoft Office, Microsoft Visual Basic, or Microsoft Visual C++.
	
	13. Q. What are the licensing guidelines for developers who want to use DAO to
	  programmatically control replication with the Jet database engine?
	
	  A. There is no difference between using DAO to programmatically control
	  replication and using DAO to control the rest of the Jet database engine.
	  Developers who use DAO to control replication must follow the same licensing
	  guidelines described above.
	
	14. Q. How are the licensing guidelines different for the Microsoft Replication
	  Manager?
	
	  A. All Microsoft Access Developer's Toolkit licensing terms applies to
	  Microsoft Replication Manager with the following differences:
	
	  1. Microsoft Replication Manager does not have to be distributed as part of a
	     custom solution. Microsoft Replication Manager may be distributed on a
	     standalone basis to any desktop that has a copy of the Jet database
	     engine. A valid desktop would have Microsoft Access, Microsoft Excel,
	     Microsoft Visual Basic, or Microsoft Visual C++. Any desktop which has a
	     solution built using Microsoft Access Developer's Toolkit, Microsoft
	     Visual Basic, or Microsoft Visual C++ also qualifies.
	
	  2. MiCrosoft Replication Manager product support is paid-only support under
	     Microsoft Product Support Services policies. This support is for the
	     licensed owners of the Microsoft Access Developer's Toolkit. Users who
	     receive Microsoft Replication Manager from a Microsoft Access Developer's
	     Toolkit licensee are not covered under this support plan.
	
	REFERENCES
	==========
	
	The contents of this article are also available in Qalicen.exe in the Microsoft
	Download Center. For information about how to obtain Qalicen.exe, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q139484 : ADT95: MS ADT Licensing Q&A Available in Download Center
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
