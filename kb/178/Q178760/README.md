---
layout: page
title: "Q178760: HOWTO: Alter the Properties of a View at Run Time"
permalink: /kb/178/Q178760/
---

## Q178760: HOWTO: Alter the Properties of a View at Run Time

{% raw %}

	Article: Q178760
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some circumstances, it may be desirable to modify the properties of a view
	at run time. This article describes the properties and default property values
	associated with a view. The sample code illustrates how to create a view and use
	the DBSETPROP() function to alter the properties of the view programmatically.
	
	MORE INFORMATION
	================
	
	The properties of a view created with the View Designer are readily accessible
	from the View Designer. The properties of a view created programmatically,
	however, use default values unless those values are changed either
	programmatically or from the View Designer.
	
	The default values of a view created programmatically are as follows:
	
	  Property Name            Default Value
	  --------------------------------------
	
	  SendUpdates              .F. (False)
	  UpdateType               1 SQL Update
	  WhereType                3 Key and Modified Fields
	  BatchUpdateCount         1
	  UseMemoSize              255
	  FetchSize                100
	  FetchMemo                .T. (True)
	  MaxRecords               -1 (All)
	  Tables                   Database Container and Table Name
	  Comment                  Null String
	  Prepared                 .F. (False)
	  CompareMemo              .T. (True)
	  FetchAsNeeded            .F. (False)
	
	  View Field Properties    Default Value
	  -------------------------------------
	
	  KeyField                 .T. (True if the field is a Primary Key)
	                           .F. (False if the field is not a Primary Key)
	  Updatable                .F. (False)
	  UpdateName               Database Container, Table Name And Field Name
	  DataType                 Same as source field
	  Caption                  Null String
	  RuleExpression           Null String
	  RuleText                 Null String
	  Default                  Null String
	
	The following View Properties are not available in Visual FoxPro 3.0 or Visual
	FoxPro 3.0b:
	
	  Prepared
	  CompareMemo
	  FetchAsNeeded
	
	The following sample code creates a view based on the Customer table contained in
	the \Samples\Data subdirectory of the Visual FoxPro installation folder. In
	Visual FoxPro 6.0, Customer table is in the Microsoft Visual
	Studio\Common\Samples\Data folder.
	
	1. Create a program called Makeview.prg using the following code:
	
	        thisversion=VERSION()
	        IF LEFT(ALLTRIM(thisversion),6)="Visual"
	          thisversion=VAL(SUBSTR(thisversion,15,2))
	        ELSE
	          thisversion=0
	        ENDIF
	        SET EXCLUSIVE ON
	        SET MULTILOCKS ON
	        OPEN DATABASE home()+"\SAMPLES\DATA\TESTDATA"
	        CREATE SQL VIEW customerview ;
	         AS SELECT DISTINCT cust_id, company, contact ;
	        FROM testdata!customer ;
	        ORDER BY customer.cust_id
	        * Set view properties.
	        =DBSETPROP('CUSTOMERVIEW','View','SendUpdates',.T.)
	        =DBSETPROP('CUSTOMERVIEW','View','UpdateType',2)
	        =DBSETPROP('CUSTOMERVIEW','View','WhereType',1)
	        =DBSETPROP('CUSTOMERVIEW','View','BatchUpdateCount',3)
	        =DBSETPROP('CUSTOMERVIEW','View','UseMemoSize',255)
	        =DBSETPROP('CUSTOMERVIEW','View','FetchSize',100)
	        =DBSETPROP('CUSTOMERVIEW','View','FetchMemo',.T.)
	        =DBSETPROP('CUSTOMERVIEW','View','MaxRecords',10)
	        =DBSETPROP('CUSTOMERVIEW','View','Tables','CUSTOMER')
	        =DBSETPROP('CUSTOMERVIEW','View','Comment',"Demonstration View")
	        IF thisversion>=5
	        =DBSETPROP('CUSTOMERVIEW','View','Prepared',.F.)
	        =DBSETPROP('CUSTOMERVIEW','View','CompareMemo',.T.)
	        =DBSETPROP('CUSTOMERVIEW','View','FetchAsNeeded',.T.)
	        ENDIF
	        SELECT customer
	        USE
	        * Set Key and Updatable fields.
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','KeyField',.T.)
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','Updatable',.T.)
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','UpdateName', ;
	        'CUSTOMER.Cust_id')
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','DataType',"C(12)")
	        =DBSETPROP('CUSTOMERVIEW.Cust_id','Field','Caption','Primary Key')
	        =DBSETPROP('CUSTOMERVIEW.Company','Field','KeyField',.F.)
	        =DBSETPROP('CUSTOMERVIEW.Company','Field','Updatable',.T.)
	        =DBSETPROP('CUSTOMERVIEW.Company','Field','UpdateName', ;
	        'CUSTOMER.Company')
	        =DBSETPROP('CUSTOMERVIEW.Company','Field','DataType',"N(15,2)")
	        =DBSETPROP('CUSTOMERVIEW.Company','Field','Caption','Company Name')
	        =DBSETPROP('CUSTOMERVIEW.Contact','Field','KeyField',.F.)
	        =DBSETPROP('CUSTOMERVIEW.Contact','Field','Updatable',.F.)
	        =DBSETPROP('CUSTOMERVIEW.Contact','Field','UpdateName', ;
	        'CUSTOMER.Contact')
	        =DBSETPROP('CUSTOMERVIEW.Contact','Field','DataType',"N(15,2)")
	        =DBSETPROP('CUSTOMERVIEW.Contact','Field','Caption','Contact Name')
	        USE customerview
	        BROWSE
	        RETURN
	
	2. From the Command window, type:
	
	        DO Makeview.prg
	
	  The program creates an updateable view based on the Customer table.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
