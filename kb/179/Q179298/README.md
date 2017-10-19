---
layout: page
title: "Q179298: PRB: Null RuleExpression, RuleText, and Default View Properties"
permalink: /kb/179/Q179298/
---

## Q179298: PRB: Null RuleExpression, RuleText, and Default View Properties

	Article: Q179298
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is returned when you attempt to use a view:
	
	  Error reading a property from the database. The property is ignored.
	
	CAUSE
	=====
	
	Setting the RuleExpression, RuleText, and/or the Default property of a view
	field to an illegal value causes this behavior. Examples of illegal values
	include the null string ("") or setting a RuleExpression property to a text
	string, such as "This field cannot be empty."
	
	RESOLUTION
	==========
	
	In order to prevent the error message from appearing it is necessary to re-
	create the view with valid field properties.
	
	The following code re-creates a view from the view definition stored in the
	database container:
	
	     PARAMETER viewname
	     thisversion=VERSION()
	     IF LEFT(ALLTRIM(thisversion),6)="Visual"
	        thisversion=VAL(SUBSTR(thisversion,15,2))
	     ELSE
	        thisversion=0
	     ENDIF
	     SET EXCLUSIVE ON
	     SET MULTILOCKS ON
	     DECLARE viewprops[1,5]
	     OPEN DATABASE home()+"\SAMPLES\DATA\TESTDATA" EXCL
	     sql_statement=DBGETPROP(viewname,"VIEW","SQL")
	     llsendupdates=DBGETPROP(viewname,'View','SendUpdates')
	     lnupdatetype=DBGETPROP(viewname,'View','UpdateType')
	     lnwheretype=DBGETPROP(viewname,'View','WhereType')
	     lnbatchupdatecount=DBGETPROP(viewname,'View','BatchUpdateCount')
	     lnusememosize=DBGETPROP(viewname,'View','UseMemoSize')
	     lnfetchsize=DBGETPROP(viewname,'View','FetchSize')
	     llfetchmemo=DBGETPROP(viewname,'View','FetchMemo')
	     lnmaxrecords=DBGETPROP(viewname,'View','MaxRecords')
	     lctables=DBGETPROP(viewname,'View','Tables')
	     lccomment=DBGETPROP(viewname,'View','Comment')
	     IF thisversion>=5
	        llprepared=DBGETPROP(viewname,'View','Prepared')
	        llcomparememo=DBGETPROP(viewname,'View','CompareMemo')
	        llfetchasneeded=DBGETPROP(viewname,'View','FetchAsNeeded')
	     ENDIF
	     USE &viewname
	     =AFIELDS(viewflds,viewname)
	     USE
	     FOR i=1 TO ALEN(viewflds,1)
	        DIMENSION viewprops[i,5]
	        fld_name=viewflds[i,1]
	        viewfield=ALLTRIM(viewname)+"."+ALLTRIM(fld_name)
	        viewprops[i,1]=DBGETPROP(viewfield,'Field','KeyField')
	        viewprops[i,2]=DBGETPROP(viewfield,'Field','Updatable')
	        viewprops[i,3]=DBGETPROP(viewfield,'Field','UpdateName')
	        viewprops[i,4]=DBGETPROP(viewfield,'Field','DataType')
	        viewprops[i,5]=DBGETPROP(viewfield,'Field','Caption')
	     NEXT
	     DELETE VIEW &viewname
	     CREATE SQL VIEW &viewname AS &sql_statement
	     =DBSETPROP(viewname,'View','SendUpdates',llsendupdates)
	     =DBSETPROP(viewname,'View','UpdateType',lnupdatetype)
	     =DBSETPROP(viewname,'View','WhereType',lnwheretype)
	     =DBSETPROP(viewname,'View','BatchUpdateCount',lnbatchupdatecount)
	     =DBSETPROP(viewname,'View','UseMemoSize',lnusememosize)
	     =DBSETPROP(viewname,'View','FetchSize',lnfetchsize)
	     =DBSETPROP(viewname,'View','FetchMemo',llfetchmemo)
	     =DBSETPROP(viewname,'View','MaxRecords',lnmaxrecords)
	     =DBSETPROP(viewname,'View','Tables',lctables)
	     =DBSETPROP(viewname,'View','Comment',lccomment)
	     IF thisversion>=5
	        =DBSETPROP(viewname,'View','Prepared',llprepared)
	        =DBSETPROP(viewname,'View','CompareMemo',llcomparememo)
	        =DBSETPROP(viewname,'View','FetchAsNeeded',llfetchasneeded)
	     ENDIF
	     FOR i=1 TO ALEN(viewflds,1)
	        fld_name=viewflds[i,1]
	        viewfield=ALLTRIM(viewname)+"."+ALLTRIM(fld_name)
	        =DBSETPROP(viewfield,'Field','KeyField',viewprops[i,1])
	        =DBSETPROP(viewfield,'Field','Updatable',viewprops[i,2])
	        =DBSETPROP(viewfield,'Field','UpdateName',viewprops[i,3])
	        =DBSETPROP(viewfield,'Field','DataType',viewprops[i,4])
	        =DBSETPROP(viewfield,'Field','Caption',viewprops[i,5])
	     NEXT
	     RETURN
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When a view is created, the default value for the RuleExpression, RuleText, and
	Default field properties is a null string.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Bogus.prg with the following code:
	
	        OPEN DATABASE home()+"\SAMPLES\DATA\TESTDATA"
	        CREATE SQL VIEW customerview ;
	           AS SELECT DISTINCT cust_id, company, contact ;
	           FROM testdata!customer ;
	           ORDER BY customer.cust_id
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','RuleExpression', ;
	           'len(alltrim(cust_id))>0') && Fails with null.
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','RuleText', ;
	           "this field cannot be empty") && Fails either way.
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','Default', ;
	           "alltrim(str(reccount()+1))") && Fails with null.
	        =DBSETPROP('customerview.Company','Field','RuleExpression', ;
	           'company<>0') && Fails with null.
	        =DBSETPROP('customerview.Company','Field','RuleText', ;
	           "it cannot be empty")
	        =DBSETPROP('customerview.Company','Field','Default', ;
	           'reccount()+1') && Fails with null.
	        USE CUSTOMERVIEW
	        BROWSE
	
	2. In the FoxPro Command window type "DO Bogus".
	
	  When the program runs and the view is used, the following error message is
	  displayed twice:
	
	  Error reading a property from the database. The property is ignored.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
