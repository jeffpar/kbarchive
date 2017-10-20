---
layout: page
title: "Q130706: PRB: MODIFY STRUCTURE Command Doesn't Set Index Order"
permalink: /kb/130/Q130706/
---

## Q130706: PRB: MODIFY STRUCTURE Command Doesn't Set Index Order

{% raw %}

	Article: Q130706
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify an index by using the MODIFY STRUCTURE command in Visual FoxPro
	version 3.0, no index order is set.
	
	This behavior appears to be different from that of FoxPro versions 2.x. FoxPro
	versions 2.x have a Setup dialog box that allows you to modify the table's
	structure as well as add, modify, delete, or set the index order for the table.
	
	CAUSE
	=====
	
	The MODIFY STRUCTURE command in FoxPro versions 2.x and in Visual FoxPro version
	3.0 defines the table itself. In Visual FoxPro, the table itself includes the
	indexes associated with the table. When you modify an index, Visual FoxPro does
	not assume that this should be the active index. The controlling index is not
	determined at the table definition level in any version of FoxPro.
	
	When you use the SET command to activate the View window, you are operating on
	the active workarea. In both FoxPro versions 2.x and in Visual FoxPro, you can
	set the controlling index at the workarea level.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In FoxPro versions 2.x, the MODIFY STRUCTURE command opens a Table Structure
	window. This window does not include an option for modifying or setting an
	index.
	
	In Visual FoxPro version 3.0, the MODIFY STRUCTURE command opens the Table
	Designer.
	
	The Table Designer includes a tab that allows you to modify the indexes
	associated with the table. It's easy to confuse this dialog window with the
	Setup dialog window in FoxPro versions 2.x. However, they are not the same.
	
	In FoxPro versions 2.x, the SET command opens the View window. The View window
	contains a Setup button that opens a Setup dialog box. On the right side of the
	Setup dialog box, FoxPro provides a button that allows you to modify the
	structure of the table. This option opens the same Table Structure window as the
	MODIFY STRUCTURE command does. On the left side of the Setup dialog box, FoxPro
	provides an area that allows you to modify indexes and set the active index.
	This is appropriate because you are setting the controlling index for the table
	active in a specific workarea.
	
	In Visual FoxPro version 3.0, the SET command also opens the View window. The
	View window contains a Properties button that opens the WorkArea Properties
	dialog box, which contains an Index Order button. Click the button to select the
	controlling index for the table in this workarea.
	
	Steps to Reproduce Behavior
	---------------------------
	
	To see the behavior in FoxPro versions 2.x, follow these steps:
	
	1. Start FoxPro version 2.x, and type the following commands in the Command
	  window (assuming FoxPro is the main FoxPro directory):
	
	     USE \FoxPro\language\customer
	     MODIFY STRUCTURE
	
	  The Table Structure window appears. Note that it contains no options for
	  creating, modifying, or setting an index for the table. Click the Cancel
	  button to close the window.
	
	2. Type "SET" (without the quotation marks) in the Command window to see the
	  View window. Click the Setup button. The Setup dialog box appear.
	
	3. In the Structure area of the Setup dialog box, choose the Modify button. The
	  Table Structure dialog box appears. This is the same dialog box that is
	  activated by the MODIFY STRUCTURE command. Click the Cancel button to close
	  the Table Structure dialog box.
	
	4. In the Index area of the Setup dialog box, choose the Modify button. The
	  Index dialog box appears.
	
	5. Select the contact index in the Index Key: list box.
	
	6. Choose the Index Key button to activate the Expression Builder.
	
	7. In the INDEX ON: <expr> text box, add company to contact:
	
	     contact+company
	
	8. Choose the OK button to save the change, and close the Expression Builder.
	  Choose the OK button to close the Index dialog box. When the "contact already
	  exists, overwrite it" message appears, click the Yes button. You should see a
	  small icon in the shape of a key next to the Customer:Contact index. This
	  indicates that "contact" is the controlling index.
	
	To see the behavior in Visual FoxPro version 3.0, follow these steps:
	
	1. Start Visual FoxPro, and type the following in the Command window (assuming
	  VFP is the main Visual FoxPro directory):
	
	     USE \vfp\samples\data\customer
	     MODIFY STRUCTURE
	
	  The Table Designer window appears.
	
	2. Select the Index tab. Then select the Contact index.
	
	3. Click the small button to the right of the Expression list to activate the
	  Expression Builder.
	
	4. In the Expression text box, add company to contact:
	
	     contact+company
	
	5. Click the OK button to save the change, and close the Expression Builder. You
	  should see the modified index key in the list.
	
	6. Click the OK button to close the Table Designer. When the "Make structure
	  changes permanent?" message appears, click the Yes button.
	
	7. In the Command window, type "SET" (without the quotation marks) to bring up
	  the View window. Choose the Properties button. The WorkArea Properties dialog
	  box appears. You can see that no index order is set for this table.
	
	8. Set the controlling index by selecting one of the indexes in the list.
	
	9. Click the OK button to close the WorkArea Properties dialog box. You should
	  see a small arrow to the left of the Customer alias. This arrow indicates
	  that an index order has been set for the table in this workarea.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
