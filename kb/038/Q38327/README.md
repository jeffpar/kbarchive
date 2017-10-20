---
layout: page
title: "Q38327: _Fheapwalk Does Not Check the Near Heap"
permalink: /kb/038/Q38327/
---

## Q38327: _Fheapwalk Does Not Check the Near Heap

{% raw %}

	Article: Q38327
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QuickC | mspl13_c
	Last Modified: 30-NOV-1988
	
	The HeapWalk routines are provided as an aid in debugging heap-related
	problems in programs. In large-, huge-, and compact-memory models
	_heapwalk will map onto the function _fheapwalk. In small- and
	medium-memory models, it maps onto function _nheapwalk. The _fheapwalk
	function will not check or examine the near heap in the default data
	segement while _nheapwalk will examine only the near heap.
	
	Because _fheapwalk will not check the near heap, you should not assume
	that the HeapWalk routine will always reflect information about all
	your pointers when you are using compact-, large- and huge-memory
	models. This is because in these models, malloc will draw upon the
	far heap until it is exhausted, then turn to the near heap. In this
	case, it is possible to have valid pointers but _fheapwalk will not
	acknowledge them.
	
	For this reason, you should not assume that _fheapwalk will provide
	information about all your pointers, or you should use both _fheapwalk
	and _nheapwalk to check both the near heap and the far heap.

{% endraw %}
