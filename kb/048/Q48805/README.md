---
layout: page
title: "Q48805: Tabs from QuickC Get Expanded"
permalink: /kb/048/Q48805/
---

## Q48805: Tabs from QuickC Get Expanded

{% raw %}

	Article: Q48805
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 10-OCT-1989
	
	When using other editors to display a file originally created in the
	QuickC environment, the file appears to have jagged or skewed lines.
	
	The following is a workaround:
	
	Edit or display your file only with editors similar to the QuickC
	environment, such as the "M Editor", that allow you to change the
	default value of the tab character. Or, you could run your file
	through a translator to replace each tab character with a specific
	number of blank spaces.
	
	If you press the TAB key in the QuickC environment, the tab character
	(09h) is inserted into your edited file. QuickC does not expand the
	tab character to its equivalent in blank spaces, it merely displays
	the number of blank spaces equivalent to the tab character. The
	default value is eight blank spaces per tab character. Changing this
	default value within QuickC does not change the default value for
	other editors.

{% endraw %}
