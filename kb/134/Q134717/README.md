---
layout: page
title: "Q134717: SMS: Query Results Display Only First Data Record"
permalink: /kb/134/Q134717/
---

## Q134717: SMS: Query Results Display Only First Data Record

{% raw %}

	Article: Q134717
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you query on a PC Architecture Group with multiple data records for its
	attributes, the SMS Query results display only the first data record. This may
	not necessarily be the value that the query was based on. However, the computer
	that the information was returned for is the correct computer.
	
	The Disk, Packages, Services, and Audited Software groups could have multiple
	data records.
	
	
	CAUSE
	=====
	
	This is a limitation of the SMS Administrator utility.
	
	WORKAROUND
	==========
	
	To see the detailed information in the data record that matches the query,
	double click on a client in the list to reveal the Personal Computer properties
	for that system.
	
	In order to view multiple data records for more than one client at a time, use a
	different SQL query tool that is capable of generating reports. Systems
	Management Server is accompanied by a copy of Crystal Reports for this purpose.
	It installs with a number of predefined queries and reports to view your SMS
	data. Other tools such as Microsoft Access or Microsoft Query are also capable
	of generating similar reports. Before you use those applications to query the
	Systems Management Server database, run SMSVIEW to create the necessary SQL
	views.
	
	For more information on using SMSVIEW, query on SMSVIEW in the Microsoft
	Knowledgebase and see Appendix I of the Systems Management Server
	"Administrator's Guide."
	
	STATUS
	======
	
	This is by product design.
	
	Additional query words: prodsms sms ad-hoc wrong incorrect drive a
	
	======================================================================
	Keywords          : kbinterop kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
