---
layout: page
title: "Q132479: PRB: 'Variable 'TYPE' is not found' err msg using Export"
permalink: kb/132/Q132479/
---

## Q132479: PRB: 'Variable 'TYPE' is not found' err msg using Export

	Article: Q132479
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the File menu, if you click Export to export a Visual FoxPro table to FoxPro
	version 2.x format, the following error message displays if the COPY TO command
	is more than 254 characters long:
	
	  Variable 'TYPE' is not found
	
	CAUSE
	=====
	
	Visual FoxPro's Export dialog box appears to put the string generated from the
	COPY TO command into a variable. However, variables can contain up to 254
	characters, so the code appears to pull off the last field name from the COPY TO
	command. The text displayed in the Command window looks something like this:
	
	COPY TO d:\vfp\ord FIELDS Orders.order_id,Orders.cust_id,Orders.emp_id, ;
	Orders.to_name,Orders.to_address,Orders.to_city,Orders.to_region, ;
	Orders.postalcode,Orders.to_country,Orders.ship_count,Orders.ship_via, ;
	Orders.order_date,Orders.order_amt,Orders.order_dsc,Orders.order_net, ; Orders.
	TYPE FOX2X
	
	The last field in the ORDERS table is FREIGHT, and the above code shows how the
	last field name is stripped from the COPY TO command.
	
	WORKAROUND
	==========
	
	Choose any one of the following workarounds:
	
	- Type the "COPY TO" (without the quotation marks) command in the Command
	  window.
	
	-or-
	
	- Create and run a program file to use the COPY TO command.
	
	-or-
	
	- Use the COPY TO command (through the dialog box, in the Command window, or in
	  a program file) without typing in the field names when you are exporting all
	  field names.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro.
	
	2. In the Command window, type:
	
	  " OPEN DATABASE \vfp\samples\data\testdata " (without the quotation marks)
	
	3. In the Command window, type:
	
	  " USE ORDERS " (without the quotation marks)
	
	4. On the File menu, click Export. In the Type combo box, select FoxPro 2.x
	  (DBF), and type:
	
	  " test " (without the quotation marks)
	
	5. Click the Options button. Click the Fields button. Click the All button.
	
	6. Click OK a total of three times to get out of the dialog box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
