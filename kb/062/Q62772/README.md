---
layout: page
title: "Q62772: OPEN New Table with PROISAM Causes &quot;Feature Unavailable&quot;"
permalink: /kb/062/Q62772/
---

## Q62772: OPEN New Table with PROISAM Causes &quot;Feature Unavailable&quot;

{% raw %}

	Article: Q62772
	Product(s): See article
	Version(s): 7.00 7.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S900312-94 docerr | mspl13_basic
	Last Modified: 15-JAN-1991
	
	Page 234 of "Microsoft BASIC 7.0: Language Reference" (for versions
	7.00 and 7.10) incorrectly states that the error generated when
	attempting to OPEN a new ISAM table or database with the PROISAM TSR
	loaded will produce a "File not found" error message. The correct
	error message produced is actually "Feature Unavailable."
	
	This information applies to Microsoft BASIC Professional Development
	System (PDS) versions 7.00 and 7.10 for MS-DOS.
	
	Note: The PROISAM TSR (or library) allows existing databases and
	tables to be accessed, but does not allow dynamic allocation of
	databases and tables. The PROISAMD TSR (or library) is required to
	dynamically allocate databases and tables.

{% endraw %}
