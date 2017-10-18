---
layout: page
title: "Q274772: INFO: Perl Support Boundaries"
permalink: kb/274/Q274772/
---

## Q274772: INFO: Perl Support Boundaries

	Article: Q274772
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCGI kbISAPI kbISAPI300 kbISAPI400 kbGrpDSInetServer kbDSupport kbIIS kbiis300 kbiis40
	Last Modified: 19-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Customers frequently call Microsoft support for Perl issues, particularly when
	they are running Perl scripts on Internet Information Server (IIS). The only
	product that Microsoft ships that has any sort of Perl capabilities is the
	Microsoft Windows NT Resource Kit, and the Perl lanugage is not supported.
	Therefore Microsoft's ability to help customers with Perl issues is limited.
	This article defines Microsoft support boundaries for Perl issues.
	
	MORE INFORMATION
	================
	
	Because Microsoft does not support the Perl language itself, Microsoft offers no
	help with writing Perl, fixing bugs in Perl script, or setting up or configuring
	Perl. However, Microsoft does support the environments in which Perl runs. For
	example, the resource kit implementation of Perl runs Perl script as a Common
	Gateway Interface (CGI) application. Because Microsoft supports the CGI
	interface, which includes setting environment variables for the CGI process and
	communicating with the CGI through standard input (STDIN) and standard output
	(STDOUT), Microsoft Product Support can work with customers whose Perl script is
	not working because the CGI environment variables do not appear properly or who
	are having problems with input and output (I/O).
	
	
	If a customer needs Perl support, a full-featured implementation of Perl is
	available from and supported by ActiveState. For more information, see the
	following Web site:
	
	  http://www.activestate.com
	
	Sample Scenarios:
	
	The following are some of the problems that customers may encounter with Perl
	scripts:
	
	- None of the customer's Perl scripts work.
	
	  This is an installation or configuration question, and Microsoft can only
	  provide limited support.
	
	- The customer has a problem with how to call a Perl function within the
	  script.
	
	  This is a Perl language or syntax problem, and is not supported by Microsoft.
	
	- The customer's Perl script does not work when it is run as a CGI program.
	
	  If no Perl scripts work, the problem is a setup or configuration issue, and
	  Microsoft can only provide limited support. If only one particular Perl
	  script is failing, a problem may exist with the IIS CGI environment.
	  Microsoft Product Support help to determine whether the problem exists in the
	  CGI environment or in the Perl code. However, this may take some research
	  with the customer. The customer must understand the Perl script code and be
	  able to perform normal debug actions, such as determining where the code is
	  failing.
	
	REFERENCES
	==========
	
	For additional information on confirming the proper installation and execution
	of Perl CGI scripts, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q245225 Configuring and Testing a PERL Script with IIS 4.0 and 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCGI kbISAPI kbISAPI300 kbISAPI400 kbGrpDSInetServer kbDSupport kbIIS kbiis300 kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
